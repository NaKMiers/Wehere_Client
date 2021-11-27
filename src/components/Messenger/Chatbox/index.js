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
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import apis from '../../../apis'
import SettingIcon from '../../../components/Icons/SettingIcon'
import MoreIcon from '../../Icons/MoreIcon'
import Message from '../Message'
import SettingChat from './SettingChat'
import useStyles from './styles'
import { Redirect } from 'react-router-dom'

const emojiList = [
   '😀 😃 😄 😁 😆 😅 😂 🤣 🥲 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿',
   '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🦬 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐈‍⬛ 🪶 🐓 🦃 🦤 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦫 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲',
   '🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🛻 🚚 🚛 🚜 🦯 🦽 🦼 🛴 🚲 🛵 🏍 🛺 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ 🪝 ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🛖 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🛕 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁',
   '⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️‍♀️ 🏋️ 🏋️‍♂️ 🤼‍♀️ 🤼 🤼‍♂️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️‍♀️ ⛹️ ⛹️‍♂️ 🤺 🤾‍♀️ 🤾 🤾‍♂️ 🏌️‍♀️ 🏌️ 🏌️‍♂️ 🏇 🧘‍♀️ 🧘 🧘‍♂️ 🏄‍♀️ 🏄 🏄‍♂️ 🏊‍♀️ 🏊 🏊‍♂️ 🤽‍♀️ 🤽 🤽‍♂️ 🚣‍♀️ 🚣 🚣‍♂️ 🧗‍♀️ 🧗 🧗‍♂️ 🚵‍♀️ 🚵 🚵‍♂️ 🚴‍♀️ 🚴 🚴‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🪘 🎷 🎺 🪗 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩',
   '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕 🫓 🥪 🥙 🧆 🌮 🌯 🫔 🥗 🥘 🫕 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🦪 🍤 🍙 🍚 🍘 🍥 🥠 🥮 🍢 🍡 🍧 🍨 🍦 🥧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 🫖 ☕️ 🍵 🧃 🥤 🧋 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🧉 🍾 🧊 🥄 🍴 🍽 🥣 🥡 🥢 🧂',
]

function Chatbox({ curUser }) {
   const [anchorEl, setAnchorEl] = useState(null)
   const [emojiTab, setEmojiTab] = useState(1)
   const [isOpenEmojiTable, setOpenEmojiTable] = useState(false)
   const [isOpenModalSettingChat, setOpenModalSettingChat] = useState(false)
   const [curFriend, setCurFriend] = useState({})
   const [curCvs, setCurCvs] = useState(() => {
      if (Cookies.get('curCvs')) {
         return JSON.parse(Cookies.get('curCvs'))
      }
      return null
   })

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

   return (
      <div className={styles.chatBox}>
         {curCvs && curUser ? (
            <>
               <Box className={styles.chatHeader}>
                  <Link to='/profile/user1' className={styles.avtLink}>
                     <Avatar className={styles.avt} alt='avt' src={curFriend.avatar}></Avatar>
                     <Badge
                        className={styles.badge}
                        color='primary'
                        variant='dot'
                        invisible={false}
                     />
                  </Link>
                  <Box className={styles.textHeader}>
                     <Typography className={styles.userName} variant='h6'>
                        {curFriend.username}
                     </Typography>
                     <Typography className={styles.status} variant='subtitle1'>
                        Action now
                     </Typography>
                  </Box>
                  <Box className={styles.moreBtn} onClick={handleClick}>
                     <MoreIcon rotate />
                  </Box>
                  <Menu
                     id='basic-menu'
                     anchorEl={anchorEl}
                     open={isOpenHerderMenu}
                     onClose={handleClose}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                     className={styles.menu}
                  >
                     <MenuItem onClick={handleOpenModalSettingChat} className={styles.menuItem}>
                        Seting <SettingIcon style={{ marginLeft: 8 }} />
                     </MenuItem>
                  </Menu>
               </Box>

               <Box
                  className={styles.chatContent}
                  style={{ height: `calc(${isOpenEmojiTable ? '79vh' : '104vh'} - 231px)` }}
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
                     className={styles.inputTextField}
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
            </>
         ) : (
            <Redirect to='/messenger' />
         )}
      </div>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState)(Chatbox)
