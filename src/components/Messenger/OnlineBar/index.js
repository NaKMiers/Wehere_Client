import { Avatar, Badge, Button, ButtonGroup, List } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function OnlineBar() {
   const styles = useStyles()

   const renderUserOnline = () => {
      let result = []
      for (let i = 0; i < 10; i++) {
         result.push(
            <Button key={i} className={styles.avatarBtn}>
               <Link to={`/messenger/user${i + 1}`} className={styles.link}>
                  <Avatar className={styles.avatar} src='https://bom.to/S1mMNM' alt='avt' />
                  <Badge
                     variant='dot'
                     color='primary'
                     className={styles.badge}
                     invisible={false}
                  />
               </Link>
            </Button>
         )
      }
      return result
   }

   return (
      <List className={styles.onlineBar}>
         <ButtonGroup variant='outlined' aria-label='outlined button group'>
            <Button className={styles.menuOnlineBtn}>
               <Link to='/messenger/onlines'>
                  <ArrowForwardIosIcon className={styles.menuMusicIcon} />
               </Link>
            </Button>
            {renderUserOnline()}
         </ButtonGroup>
      </List>
   )
}

export default OnlineBar
