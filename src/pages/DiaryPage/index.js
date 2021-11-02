import { Box, List, ListItem, Typography } from '@material-ui/core'
import Header from '../../components/Header'
import useStyles from './styles'

function DiaryPage() {
   const styles = useStyles()

   return (
      <>
         <Header />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
               <ListItem>
                  <Box style={{backgroundImage: 'url(https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}} className={styles.diaryWrap} maxWidth='sm'>
                     <Typography className={styles.diaryTitle} variant='h5'>
                        Nguyen Anh Khoa
                        <Typography className={styles.diaryTime} variant='body'>
                           22/1/2022
                        </Typography>
                     </Typography>
                     
                     <Typography className={styles.diaryDesc} variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                     </Typography>
                  </Box>
               </ListItem><ListItem>
                  <Box style={{backgroundImage: 'url(https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}} className={styles.diaryWrap} maxWidth='sm'>
                     <Typography className={styles.diaryTitle} variant='h5'>
                        140904
                        <Typography className={styles.diaryTime} variant='body'>
                           22/1/2022
                        </Typography>
                     </Typography>
                     <Typography className={styles.diaryDesc} variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                     </Typography>
                  </Box>
               </ListItem><ListItem>
                  <Box style={{backgroundImage: 'url(https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}} className={styles.diaryWrap} maxWidth='sm'>
                     <Typography className={styles.diaryTitle} variant='h5'>
                        0899320427
                        <Typography className={styles.diaryTime} variant='body'>
                           22/1/2022
                        </Typography>
                     </Typography>
                     <Typography className={styles.diaryDesc} variant='subtitle1'>
                        Contrary to popular belief, Lorem Ipsum is
                     </Typography>
                  </Box>
               </ListItem>
            </List>
      </>
   )
}

export default DiaryPage
