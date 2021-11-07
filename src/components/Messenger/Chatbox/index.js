import {
   Avatar,
   Badge,
   Box,
   Button,
   Collapse,
   IconButton,
   Menu,
   MenuItem,
   TextField,
   Typography
} from '@material-ui/core'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SendIcon from '@material-ui/icons/Send'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Message from '../Message'
import useStyles from './styles'

const emojiList = [
   '😀 😃 😄 😁 😆 😅 😂 🤣 🥲 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿',
   '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲',
   '🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ 🪝 ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🛖 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁',
   '⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️‍♀️ 🏋️ 🏋️‍♂️ 🤼‍♀️ 🤼 🤼‍♂️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️‍♀️ ⛹️ ⛹️‍♂️ 🤺 🤾‍♀️ 🤾 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏌️‍♂️ 🏇 🧘‍♀️ 🧘 🧘‍♂️ 🏄‍♀️ 🏄 🏄‍♂️ 🏊‍♀️ 🏊 🏊‍♂️ 🤽‍♀️ 🤽 🤽‍♂️ 🚣‍♀️ 🚣 🚣‍♂️ 🧗‍♀️ 🧗 🧗‍♂️ 🚵‍♀️ 🚵 🚵‍♂️ 🚴‍♀️ 🚴 🚴‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩',
   '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂'
]

function Chatbox() {
   const [anchorEl, setAnchorEl] = useState(null)
   const [emojiTab, setEmojiTab] = useState(1)
   const [isOpenEmojiTable, setOpenEmojiTable] = useState(false)

   const isOpenHerderMenu = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleClickEmoji = () => {
      setOpenEmojiTable(false)
   }

   const renderEmoji = () => {
      return emojiList[emojiTab - 1].split(' ').map(e => (
         <Button key={e} onClick={handleClickEmoji} className={styles.emoji}>
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
               borderTop: `${i + 1 === emojiTab ? '3px solid #f44336' : '3px solid #ddd'}`
            }}
            onClick={() => setEmojiTab(i + 1)}
         >
            {e}
         </Button>
      ))

   const styles = useStyles()

   return (
      <div className={styles.chatBox}>
         <Box className={styles.chatHeader}>
            <Button className={styles.avtBtn}>
               <Link to='/profile/user1' className={styles.avtLink}>
                  <Avatar className={styles.avt} alt='avt' src='https://bom.to/7UX3Hq'></Avatar>
                  <Badge
                     className={styles.badge}
                     color='primary'
                     variant='dot'
                     invisible={false}
                  />
               </Link>
            </Button>
            <Box className={styles.textHeader}>
               <Typography className={styles.userName} variant='h6'>
                  Nguyen Anh Khoa
               </Typography>
               <Typography className={styles.status} variant='subtitle1'>
                  Action now
               </Typography>
            </Box>
            <IconButton onClick={handleClick} className={styles.menuIcon}>
               <MoreVertIcon />
            </IconButton>
            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={isOpenHerderMenu}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button'
               }}
            >
               <MenuItem onClick={handleClose} className={styles.menuItem}>
                  <SettingsApplicationsIcon style={{ marginRight: 4 }} />
                  Seting
               </MenuItem>
            </Menu>
         </Box>

         <Box
            className={styles.chatContent}
            style={{ height: `calc(${isOpenEmojiTable ? '75vh' : '100vh'} - 196px)` }}
         >
            <Message curUser />
            <Message />
            <Message curUser />
         </Box>

         <form className={styles.chatInput} style={{}}>
            <IconButton onClick={() => setOpenEmojiTable(!isOpenEmojiTable)}>
               <EmojiEmotionsIcon style={{ color: '#fff' }} />
            </IconButton>
            <TextField
               name='inputChat'
               InputProps={{ className: styles.inputProps }}
               className={styles.inputText}
               id='outlined-multiline-flexible'
               multiline
               maxRows={4}
               placeholder='Enter you message...'
            />

            <IconButton>
               <SendIcon style={{ color: '#fff' }} />
            </IconButton>
         </form>
         <Collapse
            className={styles.emojiTable}
            in={isOpenEmojiTable}
            timeout='auto'
            unmountOnExit
         >
            <Box className={styles.emojiTableWrap}>{renderEmoji()}</Box>
            <Box className={styles.emojiBar}>{renderTabEmoji()}</Box>
         </Collapse>
      </div>
   )
}

export default Chatbox
