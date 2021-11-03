import { Avatar, CardMedia, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import Header from '../../components/Header'
import useStyles from './styles'

function ProfilePage() {
   const styles = useStyles()

   return (
      <div>
         <Header />
         <Box className={styles.profileWrap}>
            <Box className={styles.topProfile}>
               <CardMedia
                  height='300px'
                  className={styles.bgProfile}
                  component='img'
                  image='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
               />
               <Box className={styles.avatarWrap}>
                  <Avatar
                     className={styles.avatar}
                     alt='avt'
                     src='https://i.pinimg.com/originals/00/a4/10/00a410ce9c3a23c388cbd6c629cc3053.jpg'
                  />
               </Box>
               <Typography variant='h4' className={styles.name}>
                  Nguyen Anh Khoa
               </Typography>
            </Box>
         </Box>
      </div>
   )
}

export default ProfilePage
