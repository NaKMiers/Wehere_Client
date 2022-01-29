import { Avatar, Box, Collapse, Typography } from '@material-ui/core'
import { memo, useState } from 'react'
import { format } from 'timeago.js'
import { API } from '../../../../constants'
import useStyles from './styles'

function Message({ message, own, curUserAvatar, curFriendAvatar }) {
   const styles = useStyles()

   const BoxTextMessage = () => {
      const [isOpenTimeMg, setOpenTimeMg] = useState(false)
      return (
         <Box>
            <Typography
               variant='body1'
               className={styles.textMessage}
               onClick={() => setOpenTimeMg(!isOpenTimeMg)}
               style={{ background: own && '#eee' }}
            >
               {message.text}
            </Typography>
            <Collapse in={isOpenTimeMg} timeout='auto' unmountOnExit>
               <span className={styles.timeMessage}>{format(message.createdAt)}</span>
            </Collapse>
         </Box>
      )
   }

   return (
      <Box className={styles.message} style={{ flexDirection: `${own ? 'row-reverse' : 'row'}` }}>
         <Avatar
            className={styles.avtMessage}
            src={own ? `${API}/${curUserAvatar}` : `${API}/${curFriendAvatar}`}
            alt='avt'
         />
         <Box className={styles.textMessageWrap}>
            <BoxTextMessage />
         </Box>
      </Box>
   )
}

export default memo(Message)
