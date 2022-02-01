import moment from 'moment'
import { memo } from 'react'
import { useEffect, useState } from 'react'
import useStyles from './styles'

function Time() {
   const [time, setTime] = useState()

   useEffect(() => {
      let interval
      const handleTime = () => {
         interval = setInterval(() => {
            setTime(Date.now())
         }, 1000)
      }
      handleTime()
      return () => {
         clearInterval(interval)
      }
   }, [])

   const styles = useStyles()

   return (
      <>
         <span className={styles.hour}>{moment(time).format('hh')}</span>
         <span className={styles.minute}>{moment(time).format(':mm')}</span>
         <span className={styles.second}>{moment(time).format(':ss')}</span>
         <span className={styles.second}>{moment(time).format(' a')}</span>
      </>
   )
}

export default memo(Time)
