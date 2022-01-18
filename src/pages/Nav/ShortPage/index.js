import React from 'react'
import Header from '../../../components/Header'
import Short from '../../../components/Nav1/Short'
import { Box, Fab } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import AddIcon from '../../../components/Icons/AddIcon'
import ShortModal from '../../../components/Nav1/ShortModal'
import useStyles from './styles'

function ShortPage({ curUser }) {
   const [open, setOpen] = useState(false)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()
   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            {/* <Short />
            <Short /> */}
         </div>
         <ShortModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
         <Box className={styles.addShortBtnBox} onClick={handleOpenModal}>
            <Fab aria-label='add' className={styles.addShortBtn}>
               <AddIcon />
            </Fab>
         </Box>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState, null)(ShortPage)
