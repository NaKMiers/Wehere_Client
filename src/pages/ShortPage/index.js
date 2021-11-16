import React from 'react'
import Header from '../../components/Header'
import Short from '../../components/Short'

function ShortPage() {
   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            <Short />
            <Short />
         </div>
      </>
   )
}

export default ShortPage
