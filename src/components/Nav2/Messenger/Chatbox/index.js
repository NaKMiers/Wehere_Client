import Cookies from 'js-cookie'
import { memo, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import apis from '../../../../apis'
import ChatBody from '../ChatBody'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'
import useStyles from './styles'
import { io } from 'socket.io-client'
import { SOCKET } from '../../../../constants'

function Chatbox({ curUser }) {
   const [curFriend, setCurFriend] = useState({})
   const [curCvs] = useState(() => {
      if (Cookies.get('curCvs')) {
         return JSON.parse(Cookies.get('curCvs'))
      }
      return null
   })
   const [messages, setMessages] = useState([])

   const [arrivalMessage, setArrivalMessage] = useState(null)
   const socket = useRef()

   const styles = useStyles()

   useEffect(() => {
      socket.current = io(SOCKET)
      socket.current.on('getMessage', ({ senderId, text }) => {
         setArrivalMessage({
            sender: senderId,
            text: text,
            createdAt: Date.now(),
         })
      })

      return () => {
         setArrivalMessage(null)
      }
   }, [])

   useEffect(() => {
      if (arrivalMessage) {
         if (curCvs?.members.includes(arrivalMessage.sender)) {
            setMessages(prev => [...prev, arrivalMessage])
            setArrivalMessage(null)
         }
      }
   }, [arrivalMessage, curCvs?.members, messages])

   useEffect(() => {
      if (curUser?._id) {
         socket.current.emit('addUser', curUser._id)
      }
   }, [curUser?._id])

   // getCurFriend
   useEffect(() => {
      const getCurFriend = async () => {
         if (curUser && curCvs) {
            const friendId = curCvs.members.find(m => m !== curUser._id)
            try {
               const res = await apis.getUser(friendId)
               setCurFriend(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getCurFriend()
   }, [curUser, curCvs])

   // get getMessages
   useEffect(() => {
      const getMessages = async () => {
         if (curCvs) {
            try {
               const res = await apis.getMessages(curCvs._id)
               setMessages(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getMessages()
   }, [curCvs])

   // handleSendMessage
   const handleSendMessage = async messageValue => {
      const message = {
         conversationId: curCvs._id,
         sender: curUser._id,
         text: messageValue,
      }

      socket.current.emit('sendMessage', {
         senderId: curUser._id,
         receiverId: curFriend._id,
         text: messageValue,
      })

      try {
         const res = await apis.sendMessage(message)
         setMessages([...messages, res.data])
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <div className={styles.chatBox}>
         {curCvs && curUser ? (
            <>
               <ChatHeader curFriend={curFriend} />

               <ChatBody curUser={curUser} curFriend={curFriend} messages={messages} />

               <ChatInput curUser={curUser} curCvs={curCvs} handleSendMessage={handleSendMessage} />
            </>
         ) : null}
      </div>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState)(memo(Chatbox))
