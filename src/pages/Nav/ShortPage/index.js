import React from 'react'
import Header from '../../../components/Header'
import Short from '../../../components/Nav1/Short'

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
