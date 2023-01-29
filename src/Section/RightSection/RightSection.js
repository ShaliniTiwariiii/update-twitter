import { style } from '@mui/system'
import React from 'react'
 import styles from './RightSection.module.css'
// import RightSecDiv from '../../Component/RightSecDIv/RightSecDiv'
import RightFollow from '../../Component/RightFollow/RightFollow'
import RightTrend from '../../Component/RightTrend/RightTrend'
import SearchBar from '../../Component/SearchBar/SearchBar'
function RightSection() {
  return (
    <div>
<div className={styles.mainDiv}>
      <SearchBar /></div>
      <RightTrend/>
      <RightFollow/>
    </div>
  )
}

export default RightSection
