import { Box, Button, Collapse, IconButton, TextField } from '@material-ui/core'
import clsx from 'clsx'
import { memo, useState } from 'react'
import useStyles from './styles'
import { emojiList } from '../../../../commons/commonLists'

function ChatInput({ curUser, curCvs, handleSendMessage }) {
   const [emojiTab, setEmojiTab] = useState(1)
   const [isOpenEmojiTable, setOpenEmojiTable] = useState(false)
   const [messageValue, setMessageValue] = useState('')
   const styles = useStyles()

   const handleClickEmoji = emoji => {
      setMessageValue(messageValue + emoji)
   }
   const renderEmoji = () => {
      return emojiList[emojiTab - 1].split(' ').map(e => (
         <Button key={e} onClick={() => handleClickEmoji(e)} className={styles.emoji}>
            {e}
         </Button>
      ))
   }
   const renderTabEmoji = () =>
      '😀 🐼 🚎 ⚽️ 🍎'.split(' ').map((e, i) => (
         <Button
            key={e}
            className={styles.tabEmoji}
            style={{
               borderTop: `${i + 1 === emojiTab ? '3px solid #21abe2' : '3px solid #eee'}`,
            }}
            onClick={() => setEmojiTab(i + 1)}
         >
            {e}
         </Button>
      ))

   const onSubmit = e => {
      e.preventDefault()
      if (messageValue.trim().length) {
         handleSendMessage(messageValue)
         setMessageValue('')
         setOpenEmojiTable(false)
      }
   }

   function handleCtrlEnter(e) {
      var evtobj = window.event
      if (evtobj.ctrlKey && e.keyCode === 13) onSubmit(e)
   }

   return (
      <>
         <form
            className={styles.chatInput}
            style={{
               marginTop: isOpenEmojiTable && '-241.25px',
            }}
            onSubmit={onSubmit}
         >
            <IconButton onClick={() => setOpenEmojiTable(!isOpenEmojiTable)}>
               <i className={clsx(styles.formIcon, 'fas fa-laugh-squint')} />
            </IconButton>
            <TextField
               name='inputChat'
               InputProps={{ className: styles.inputProps }}
               className={styles.inputTextField}
               id='outlined-multiline-flexible'
               multiline
               maxRows={4}
               placeholder='Enter you message...'
               value={messageValue}
               onChange={e => setMessageValue(e.target.value)}
               onKeyDown={handleCtrlEnter}
            />

            <IconButton type='submit'>
               <i className={clsx(styles.formIcon, 'fas fa-paper-plane')} />
            </IconButton>
         </form>
         <Collapse className={styles.emojiTable} in={isOpenEmojiTable} timeout='auto' unmountOnExit>
            <Box className={styles.emojiTableWrap}>{renderEmoji()}</Box>
            <Box className={styles.emojiBar}>{renderTabEmoji()}</Box>
         </Collapse>
      </>
   )
}

export default memo(ChatInput)
