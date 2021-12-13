import { Box, IconButton, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import { useState } from 'react'
import MoreIcon from '../../../components/Icons/MoreIcon'
import DeleteIcon from '../../Icons/DeleteIcon'
import DiaryModal from '../DiaryModal'
import useStyles from './styles'
import moment from 'moment'
import apis from '../../../apis'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../../actions'

function DiaryListItem({ diary, handleOpenModal, actionCreators }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const hanleDeleteDiary = async () => {
      handleClose()
      try {
         const res = await apis.deleteDiary(diary._id)
         actionCreators.deleteDiary(res.data._id)
         console.log('resDel: ', res)
      } catch (err) {
         console.log(err)
      }
   }

   const styles = useStyles()

   return (
      <ListItem>
         <Box
            style={{ backgroundImage: `url(${diary.background})` }}
            className={styles.diaryWrap}
            maxWidth='sm'
         >
            <Typography
               className={styles.diaryTitle}
               variant='h5'
               onClick={() => handleOpenModal(diary)}
            >
               {diary.title}
            </Typography>
            <IconButton aria-label='settings' className={styles.moreIconBtn} onClick={handleClick}>
               <MoreIcon rotate style={{ fontSize: 20 }} />
            </IconButton>
            <Typography className={styles.diaryTime}>
               {moment(diary.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
            </Typography>
            <Typography className={styles.diaryDesc} variant='subtitle1'>
               {diary.description}
            </Typography>
         </Box>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            className={styles.menu}
         >
            <MenuItem className={styles.menuItem} onClick={hanleDeleteDiary}>
               Delete <DeleteIcon />
            </MenuItem>
         </Menu>

         <DiaryModal />
      </ListItem>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(DiaryListItem)
