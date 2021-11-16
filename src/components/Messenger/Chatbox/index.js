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
   Typography,
} from '@material-ui/core'
import SettingIcon from '../../../components/Icons/SettingIcon'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Message from '../Message'
import SettingChat from './SettingChat'
import useStyles from './styles'

const emojiList = [
   '😀 😃 😄 😁 😆 😅 😂 🤣 🥲 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿',
   '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲',
   '🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ 🪝 ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🛖 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁',
   '⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️‍♀️ 🏋️ 🏋️‍♂️ 🤼‍♀️ 🤼 🤼‍♂️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️‍♀️ ⛹️ ⛹️‍♂️ 🤺 🤾‍♀️ 🤾 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏌️‍♂️ 🏇 🧘‍♀️ 🧘 🧘‍♂️ 🏄‍♀️ 🏄 🏄‍♂️ 🏊‍♀️ 🏊 🏊‍♂️ 🤽‍♀️ 🤽 🤽‍♂️ 🚣‍♀️ 🚣 🚣‍♂️ 🧗‍♀️ 🧗 🧗‍♂️ 🚵‍♀️ 🚵 🚵‍♂️ 🚴‍♀️ 🚴 🚴‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩',
   '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂',
]

function Chatbox() {
   const [anchorEl, setAnchorEl] = useState(null)
   const [emojiTab, setEmojiTab] = useState(1)
   const [isOpenEmojiTable, setOpenEmojiTable] = useState(false)

   const [isOpenModalSettingChat, setOpenModalSettingChat] = useState(false)

   const isOpenHerderMenu = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
      setOpenModalSettingChat(false)
   }

   const handleOpenModalSettingChat = () => {
      setOpenModalSettingChat(true)
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
               borderTop: `${i + 1 === emojiTab ? '3px solid #21abe2' : '3px solid #eee'}`,
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
            <Box className={styles.moreBtn} onClick={handleClick}>
               <i className={clsx(styles.moreIcon, 'fad fa-ellipsis-v')} />
            </Box>
            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={isOpenHerderMenu}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
            >
               <MenuItem onClick={handleOpenModalSettingChat} className={styles.menuItem}>
                  Seting <SettingIcon style={{ marginLeft: 8 }} />
               </MenuItem>
            </Menu>
         </Box>

         <Box
            className={styles.chatContent}
            style={{ height: `calc(${isOpenEmojiTable ? '75vh' : '100vh'} - 228px)` }}
         >
            <Message curUser />
            <Message />
            <Message curUser />
         </Box>

         <form className={styles.chatInput}>
            <IconButton onClick={() => setOpenEmojiTable(!isOpenEmojiTable)}>
               <i className={clsx(styles.formIcon, 'fas fa-laugh-squint')} />
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
               <i className={clsx(styles.formIcon, 'fas fa-paper-plane')} />
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

         <SettingChat open={isOpenModalSettingChat} handleClose={handleClose} />
      </div>
   )
}

export default Chatbox
