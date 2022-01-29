import {
   Box,
   Button,
   CardHeader,
   Checkbox,
   Divider,
   Grid,
   IconButton,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Paper,
   TextField,
   Typography,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import Header from '../../../components/Header'
import useStyles from './styles'

const not = (a, b) => {
   return a.filter(value => b.indexOf(value) === -1)
}

const intersection = (a, b) => {
   return a.filter(value => b.indexOf(value) !== -1)
}

function TodoListPage({ curUser, todoList, actionCreators }) {
   const [checked, setChecked] = useState([])
   const [left, setLeft] = useState(() => todoList.filter(task => task.status === 'ready'))
   const [right, setRight] = useState(() => todoList.filter(task => task.status === 'completed'))
   const [isFocusInput1, setFocusInput1] = useState(false)
   const [isFocusInput2, setFocusInput2] = useState(false)

   const leftChecked = intersection(checked, left)
   const rightChecked = intersection(checked, right)

   const [addNewTaskValue, setAddNewTaskValue] = useState('')
   const [newTaskPoint, setNewTaskPoint] = useState(1)

   const [taskEditing, setTaskEditing] = useState(null)

   const styles = useStyles()

   useEffect(() => {
      if (!todoList.length && curUser) {
         actionCreators.getAllTaskRequest()
      }
   }, [curUser, actionCreators, todoList.length])

   useEffect(() => {
      setLeft(() => todoList.filter(task => task.status === 'ready'))
      setRight(() => todoList.filter(task => task.status === 'completed'))
   }, [todoList])

   const handleToggle = value => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]

      if (currentIndex === -1) {
         newChecked.push(value)
      } else {
         newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
   }

   const handleAllRight = () => {
      actionCreators.editTaskRequest(left.map(task => ({ ...task, status: 'completed' })))

      setRight(right.concat(left))
      setLeft([])
   }

   const handleCheckedRight = () => {
      actionCreators.editTaskRequest(leftChecked.map(task => ({ ...task, status: 'completed' })))

      setRight(right.concat(leftChecked))
      setLeft(not(left, leftChecked))
      setChecked(not(checked, leftChecked))
   }

   const handleCheckedLeft = () => {
      actionCreators.editTaskRequest(rightChecked.map(task => ({ ...task, status: 'ready' })))

      setLeft(left.concat(rightChecked))
      setRight(not(right, rightChecked))
      setChecked(not(checked, rightChecked))
   }

   const handleAllLeft = () => {
      actionCreators.editTaskRequest(right.map(task => ({ ...task, status: 'ready' })))

      setLeft(left.concat(right))
      setRight([])
   }

   const handleAddTask = e => {
      e.preventDefault()
      if (addNewTaskValue.trim() !== '') {
         actionCreators.addNewTaskRequest({
            userId: curUser._id,
            title: addNewTaskValue.trim(),
            point: +newTaskPoint,
         })
         setAddNewTaskValue('')
         setNewTaskPoint(1)
      }
   }

   const handleDeleteTask = taskId => {
      actionCreators.deleteTaskRequest(taskId)
   }

   const handleMarkImportant = (task, e, isImportant) => {
      actionCreators.editTaskRequest([
         {
            ...task,
            important: !task.important,
         },
      ])
   }

   const handleEditSubmit = e => {
      e.preventDefault()
      actionCreators.editTaskRequest([taskEditing])
      setTaskEditing(null)
   }

   const customList = (todolist, title) => (
      <Paper className={styles.paper}>
         <CardHeader title={title} className={styles.cardHeader} />
         <Divider />
         <List dense component='div' role='list'>
            {todolist.map(task => {
               const labelId = `transfer-list-item-${task}-label`

               return (
                  <ListItem className={styles.taskListItem} key={task._id} role='listitem' button>
                     {taskEditing?._id !== task._id ? (
                        <>
                           <Box className={styles.taskWrap} onClick={() => handleToggle(task)}>
                              <ListItemIcon>
                                 <Checkbox
                                    checked={checked.indexOf(task) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                 />
                              </ListItemIcon>
                              <ListItemText
                                 classes={{ primary: styles.listItemText }}
                                 id={labelId}
                                 primary={task.title}
                              />
                           </Box>

                           <IconButton
                              className={styles.deleteTaskBtn}
                              onClick={() => handleDeleteTask(task._id)}
                           >
                              <HighlightOffIcon className={styles.deleteTaskIcon} />
                           </IconButton>
                           <IconButton
                              className={styles.editTaskBtn}
                              onClick={() => setTaskEditing(task)}
                           >
                              <EditIcon className={styles.editTaskIcon} />
                           </IconButton>
                           <div
                              className={clsx(styles.pointWrap, {
                                 [styles.important]: task.important,
                              })}
                              onClick={e => handleMarkImportant(task, e, task.important)}
                           >
                              <span className={styles.point}>{task.point}</span>
                           </div>
                        </>
                     ) : (
                        <form className={styles.formEditing} onSubmit={handleEditSubmit}>
                           <input
                              type='text'
                              className={styles.editingInput}
                              value={taskEditing.title}
                              onChange={e =>
                                 setTaskEditing({ ...taskEditing, title: e.target.value })
                              }
                           />
                           <input
                              type='number'
                              className={styles.editingPoint}
                              value={taskEditing.point}
                              max='99'
                              min='1'
                              onChange={e =>
                                 setTaskEditing({ ...taskEditing, point: e.target.value })
                              }
                           />
                           <Button type='submit' variant='contained' className={styles.saveEditBtn}>
                              Save
                           </Button>
                        </form>
                     )}
                  </ListItem>
               )
            })}
            <ListItem />
         </List>
      </Paper>
   )

   return (
      <>
         <Header />
         <Box className={styles.todoListPage}>
            <form onSubmit={handleAddTask}>
               <Grid className={styles.addTaskWrap}>
                  <TextField
                     onFocus={() => {
                        setFocusInput1(true)
                     }}
                     onBlur={() => {
                        setFocusInput1(false)
                     }}
                     InputProps={{
                        classes: { input: styles.inputTextField },
                     }}
                     InputLabelProps={{
                        style: {
                           fontSize: 18,
                           transform:
                              isFocusInput1 || addNewTaskValue
                                 ? 'translate(14px, -6px) scale(0.75)'
                                 : 'translate(16px, 15px) scale(1)',
                        },
                     }}
                     className={styles.taskTextField}
                     label='Add new task...'
                     variant='outlined'
                     onChange={e => setAddNewTaskValue(e.target.value)}
                     value={addNewTaskValue}
                  />
                  <TextField
                     type='number'
                     onFocus={() => {
                        setFocusInput2(true)
                     }}
                     onBlur={() => {
                        setFocusInput2(false)
                     }}
                     InputProps={{
                        classes: { input: styles.inputTextField },
                     }}
                     InputLabelProps={{
                        style: {
                           fontSize: 18,
                           transform:
                              isFocusInput2 || newTaskPoint
                                 ? 'translate(14px, -6px) scale(0.75)'
                                 : 'translate(16px, 15px) scale(1)',
                        },
                     }}
                     className={styles.pointTextField}
                     label='Point'
                     variant='outlined'
                     onChange={e =>
                        setNewTaskPoint(
                           e.target.value > 0 && e.target.value < 100 && e.target.value
                        )
                     }
                     value={newTaskPoint}
                  />
                  <Button
                     type='submit'
                     className={styles.addTaskBtn1}
                     color='primary'
                     variant='contained'
                  >
                     Add
                  </Button>
               </Grid>
               <Button
                  type='submit'
                  className={styles.addTaskBtn2}
                  color='primary'
                  variant='contained'
               >
                  Add
               </Button>
            </form>

            {todoList.length ? (
               <Grid container spacing={2} justifyContent='center' alignItems='center'>
                  <Grid item xs={12}>
                     {customList(left, 'Ready')}
                  </Grid>

                  <Grid item xs={12}>
                     <Grid container alignItems='center' className={styles.actionBtnWrap}>
                        <Button
                           className={styles.todoActionBtnUp}
                           variant='outlined'
                           size='small'
                           onClick={handleAllLeft}
                           disabled={right.length === 0}
                           aria-label='move all right'
                        >
                           <i className={clsx(styles.todoActionIcon, 'fad fa-chevron-double-up')} />
                        </Button>
                        <Button
                           className={styles.todoActionBtnUp}
                           variant='outlined'
                           size='small'
                           onClick={handleCheckedLeft}
                           disabled={rightChecked.length === 0}
                           aria-label='move selected right'
                        >
                           <i className={clsx(styles.todoActionIcon, 'fad fa-arrow-up')} />
                        </Button>
                        <Button
                           className={styles.todoActionBtnDown}
                           variant='outlined'
                           size='small'
                           onClick={handleCheckedRight}
                           disabled={leftChecked.length === 0}
                           aria-label='move selected left'
                        >
                           <i className={clsx(styles.todoActionIcon, 'fad fa-arrow-down')} />
                        </Button>
                        <Button
                           className={styles.todoActionBtnDown}
                           variant='outlined'
                           size='small'
                           onClick={handleAllRight}
                           disabled={left.length === 0}
                           aria-label='move all left'
                        >
                           <i
                              className={clsx(styles.todoActionIcon, 'fad fa-chevron-double-down')}
                           />
                        </Button>
                     </Grid>
                  </Grid>

                  <Grid item xs={12}>
                     {customList(right, 'Completed')}
                  </Grid>
               </Grid>
            ) : (
               <Box className={styles.noTaskWrap}>
                  <Typography className={styles.noTask}>
                     No task yet, please add new task now.
                  </Typography>
               </Box>
            )}
         </Box>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   todoList: state.todoList,
})
const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(TodoListPage))
