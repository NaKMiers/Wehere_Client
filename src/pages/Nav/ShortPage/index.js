import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import Short from '../../../components/Nav1/Short'
import ShortModal from '../../../components/Nav1/ShortModal'
import useStyles from './styles'

function ShortPage({ curUser, shorts }) {
   const [open, setOpen] = useState(false)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   const renderShorts = () =>
      shorts.map(s => <Short key={s.short._id} shortPost={s.short} author={s.author} />)

   return (
      <>
         <Header />

         <div className={styles.shortPage}>
            <Button className={styles.addNewShortBtn} onClick={handleOpenModal}>
               Add New Short
            </Button>
            {renderShorts()}
         </div>

         <ShortModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   shorts: state.short.shorts,
})

export default connect(mapState, null)(ShortPage)
