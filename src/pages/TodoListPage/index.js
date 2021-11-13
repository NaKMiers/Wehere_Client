import {
   Button,
   CardHeader,
   Checkbox,
   Divider,
   Grid,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Paper,
   TextField
} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { useState } from 'react'
import Header from '../../components/Header'
import useStyles from './styles'

const not = (a, b) => {
   return a.filter(value => b.indexOf(value) === -1)
}

const intersection = (a, b) => {
   return a.filter(value => b.indexOf(value) !== -1)
}

function TodoListPage() {
   const [checked, setChecked] = useState([])
   const [left, setLeft] = useState([0, 1, 2, 3])
   const [right, setRight] = useState([4, 5, 6, 7])
   const [isFocusInput1, setFocusInput1] = useState(false)
   const [isFocusInput2, setFocusInput2] = useState(false)
   const [taskValue, setTaskValue] = useState('')
   const [pointValue, setPointValue] = useState(0)

   const leftChecked = intersection(checked, left)
   const rightChecked = intersection(checked, right)

   const styles = useStyles()

   const handleToggle = value => () => {
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
      setRight(right.concat(left))
      setLeft([])
   }

   const handleCheckedRight = () => {
      setRight(right.concat(leftChecked))
      setLeft(not(left, leftChecked))
      setChecked(not(checked, leftChecked))
   }

   const handleCheckedLeft = () => {
      setLeft(left.concat(rightChecked))
      setRight(not(right, rightChecked))
      setChecked(not(checked, rightChecked))
   }

   const handleAllLeft = () => {
      setLeft(left.concat(right))
      setRight([])
   }
   const customList = (items, title) => (
      <Paper className={styles.paper}>
         <CardHeader title={title} className={styles.cardHeader} />
         <Divider />
         <List dense component='div' role='list'>
            {items.map(value => {
               const labelId = `transfer-list-item-${value}-label`

               return (
                  <ListItem key={value} role='listitem' button onClick={handleToggle(value)}>
                     <ListItemIcon>
                        <Checkbox
                           checked={checked.indexOf(value) !== -1}
                           tabIndex={-1}
                           disableRipple
                           inputProps={{
                              'aria-labelledby': labelId
                           }}
                        />
                     </ListItemIcon>
                     <ListItemText
                        classes={{ primary: styles.listItemText }}
                        id={labelId}
                        primary={`List item ${value + 1}`}
                     />
                     <div className={styles.pointWrap}>
                        <span className={styles.point}>10</span>
                     </div>
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
         <div style={{ padding: 16 }}>
            <Grid className={styles.addTaskWrap}>
               <TextField
                  onFocus={() => {
                     setFocusInput1(true)
                  }}
                  onBlur={() => {
                     setFocusInput1(false)
                  }}
                  InputProps={{
                     classes: { input: styles.inputTextField }
                  }}
                  InputLabelProps={{
                     style: {
                        fontSize: 18,
                        transform:
                           isFocusInput1 || taskValue
                              ? 'translate(14px, -6px) scale(0.75)'
                              : 'translate(16px, 15px) scale(1)'
                     }
                  }}
                  onChange={e => setTaskValue(e.target.value)}
                  className={styles.taskTextField}
                  label='Add new task...'
                  variant='outlined'
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
                     classes: { input: styles.inputTextField }
                  }}
                  InputLabelProps={{
                     style: {
                        fontSize: 18,
                        transform:
                           isFocusInput2 || pointValue
                              ? 'translate(14px, -6px) scale(0.75)'
                              : 'translate(16px, 15px) scale(1)'
                     }
                  }}
                  onChange={e => setPointValue(e.target.value)}
                  className={styles.pointTextField}
                  label='Point'
                  variant='outlined'
               />
               <Button className={styles.addTaskBtn} color='primary' variant='contained'>
                  Add
               </Button>
            </Grid>

            <Grid container spacing={2} justifyContent='center' alignItems='center'>
               <Grid item xs={12}>
                  {customList(left, 'Ready')}
               </Grid>
               <Grid item xs={12}>
                  <Grid container alignItems='center' className={styles.actionBtnWrap}>
                     <Button
                        className={styles.todoActionBtn}
                        variant='outlined'
                        size='small'
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label='move all right'
                     >
                        <DoubleArrowIcon style={{ transform: 'rotate(-90deg)' }} />
                     </Button>
                     <Button
                        className={styles.todoActionBtn}
                        variant='outlined'
                        size='small'
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label='move selected right'
                     >
                        <ArrowUpwardIcon />
                     </Button>
                     <Button
                        className={styles.todoActionBtn}
                        variant='outlined'
                        size='small'
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label='move selected left'
                     >
                        <ArrowDownwardIcon />
                     </Button>
                     <Button
                        className={styles.todoActionBtn}
                        variant='outlined'
                        size='small'
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label='move all left'
                     >
                        <DoubleArrowIcon style={{ transform: 'rotate(90deg)' }} />
                     </Button>
                  </Grid>
               </Grid>
               <Grid item xs={12}>
                  {customList(right, 'Completed')}
               </Grid>
            </Grid>
         </div>
      </>
   )
}

export default TodoListPage
