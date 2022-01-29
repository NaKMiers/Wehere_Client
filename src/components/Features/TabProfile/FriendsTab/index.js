import { Box, List } from '@material-ui/core'
import { memo } from 'react'
import { useMemo } from 'react'
import { useEffect, useState } from 'react'
import apis from '../../../../apis'
import FriendsTabItem from './FriendsTabItem'
import useStyles from './styles'

function FriendsTab({ userProfile, curUser }) {
   const [friends, setFriends] = useState([])

   const styles = useStyles()

   useEffect(() => {
      const getFriends = async () => {
         if (userProfile?._id) {
            try {
               const res = await apis.getFriends(userProfile.friends)
               setFriends(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getFriends()
   }, [userProfile?._id, userProfile.friends])

   const renderFriends = useMemo(
      () =>
         friends
            .filter(f => f._id !== curUser._id)
            .map(f => <FriendsTabItem key={f._id} friend={f} curUser={curUser} />),
      [friends, curUser]
   )

   return (
      <Box className={styles.tab}>
         <List>{renderFriends()}</List>
      </Box>
   )
}

export default memo(FriendsTab)
