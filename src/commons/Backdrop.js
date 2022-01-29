import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { memo } from 'react'
import { connect } from 'react-redux'

function SimpleBackdrop({ open }) {
   return (
      <div>
         <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
            <CircularProgress color='inherit' />
         </Backdrop>
      </div>
   )
}

const mapState = state => ({
   open: state.showBackdrop,
})

export default connect(mapState, null)(memo(SimpleBackdrop))
