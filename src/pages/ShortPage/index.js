import React from 'react'
import Header from '../../components/Header'
import Short from '../../components/Short'

function ShortPage() {
   return (
      <>
         <Header />
         <div style={{ maxWidth: 480, margin: '24px auto' }}>
            <Short />
            <Short />
         </div>
      </>
   )
}

export default ShortPage
