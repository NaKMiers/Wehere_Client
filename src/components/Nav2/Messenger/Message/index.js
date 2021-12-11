import { Avatar, Box, Collapse, Typography } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles'

function Message({ curUser }) {
   const styles = useStyles()

   const BoxTextMessage = () => {
      const [isOpenTimeMg, setOpenTimeMg] = useState(false)
      return (
         <Box>
            <Typography
               variant='body1'
               className={styles.textMessage}
               onClick={() => setOpenTimeMg(!isOpenTimeMg)}
            >
               Nguyen Anh Khoa....
            </Typography>
            <Collapse in={isOpenTimeMg} timeout='auto' unmountOnExit>
               <span className={styles.timeMessage}>1m ago</span>
            </Collapse>
         </Box>
      )
   }

   return (
      <Box
         className={styles.message}
         style={{ flexDirection: `${curUser ? 'row-reverse' : 'row'}` }}
      >
         <Avatar className={styles.avtMessage} src='https://bom.to/GBtMwW' alt='avt' />
         <Box className={styles.textMessageWrap}>
            <BoxTextMessage />
            <BoxTextMessage />
         </Box>
      </Box>
   )
}

export default Message
