import { Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import CakeIcon from '@material-ui/icons/Cake'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HomeIcon from '@material-ui/icons/Home'
import { styled } from '@material-ui/styles'
import useStyles from './styles'

const Demo = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
}))

function InfoTab() {
   const styles = useStyles()

   return (
      <Box className={styles.tab}>
         <Grid item xs={12} md={6}>
            <Demo>
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <CakeIcon />
                     </ListItemIcon>
                     <ListItemText primary='14/09/2004' />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <FavoriteIcon />
                     </ListItemIcon>
                     <ListItemText primary='Single' />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary='Vinh Long' />
                  </ListItem>
               </List>
            </Demo>
         </Grid>
      </Box>
   )
}

export default InfoTab
