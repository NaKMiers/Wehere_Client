import { Box, List, ListSubheader, Typography } from '@material-ui/core'
import { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import apis from '../../../apis'
import AccountListItem from '../../../components/Features/AccountListItem'
import useStyles from './styles'

function SwitchAccountPage({ curUser, accounts }) {
   const [accountList, setAccountList] = useState([])

   const styles = useStyles()

   useEffect(() => {
      const getAccounts = async () => {
         try {
            const res = await apis.getAccounts(accounts)
            setAccountList(res.data)
         } catch (err) {
            console.log(err)
         }
      }
      getAccounts()
   }, [accounts])

   const renderAccounts = () =>
      accountList.map(acc => {
         if (acc._id !== curUser._id) {
            return <AccountListItem key={acc._id} account={acc} />
         }
         return null
      })

   return (
      <Box className={styles.switchAccountPage}>
         {accountList.length > 1 ? (
            <List
               className={styles.accList}
               component='nav'
               aria-labelledby='nested-list-subheader'
               subheader={
                  <ListSubheader component='div' id='nested-list-subheader'>
                     Switch Account
                  </ListSubheader>
               }
            >
               {curUser && renderAccounts()}
            </List>
         ) : (
            <Box className={styles.noAccWrap}>
               <Typography className={styles.noAccMessage}>
                  No other account.
                  <Link to='/menu' className={styles.link}>
                     return
                  </Link>
               </Typography>
            </Box>
         )}
      </Box>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   accounts: state.account.accounts,
})

export default connect(mapState)(memo(SwitchAccountPage))
