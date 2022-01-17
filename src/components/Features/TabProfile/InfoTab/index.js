import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import GenderIcon from '../../../Icons/GenderIcon'
import CakeIcon from '../../../Icons/CakeIcon'
import HeartIcon from '../../../Icons/HeartIcon'
import HomeIcon from '../../../Icons/HomeIcon'
import { styled } from '@material-ui/styles'
import useStyles from './styles'

const Demo = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
}))

function InfoTab({ userProfile }) {
   const styles = useStyles()

   return (
      <Box className={styles.tab}>
         <Grid item xs={12} md={6}>
            <Demo>
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <GenderIcon color='secondary' />
                     </ListItemIcon>
                     <ListItemText primary={userProfile?.gender} />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <CakeIcon color='secondary' />
                     </ListItemIcon>
                     <ListItemText primary={userProfile?.birthdate} />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <HeartIcon liked />
                     </ListItemIcon>
                     <ListItemText primary={userProfile?.maritalStatus} />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <HomeIcon style={{ fontSize: 27, marginLeft: -2 }} color='secondary' type />
                     </ListItemIcon>
                     <ListItemText primary={userProfile?.live} />
                  </ListItem>
               </List>
            </Demo>
         </Grid>
      </Box>
   )
}

export default InfoTab
