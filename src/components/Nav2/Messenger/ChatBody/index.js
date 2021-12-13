import { Box } from '@material-ui/core'
import { memo, useEffect, useRef } from 'react'
import Message from '../Message'
import useStyles from './styles'

function ChatBody({ curUser, curFriend, messages }) {
   const scrollRef = useRef()

   const styles = useStyles()

   useEffect(() => {
      scrollRef?.current?.scrollIntoView({ behavior: 'smooth' })
   })

   const renderMessage = () => {
      if (messages.length) {
         return messages.map((m, i) => (
            <div key={i} ref={scrollRef}>
               <Message
                  own={m.sender === curUser._id}
                  message={m}
                  curUserAvatar={curUser.avatar}
                  curFriendAvatar={curFriend.avatar}
               />
            </div>
         ))
      }
      return <h1 className={styles.noMessage}>No messages yet, let's start a new conversation.</h1>
   }

   return <Box className={styles.chatContent}>{renderMessage()}</Box>
}

export default memo(ChatBody)
