import React from 'react'
import styles from './spinner.module.scss'

function Spinner(props){
  return(
    <div className={styles.spinner}>
      <div className ={styles.spinwheel}/>
        <p>Hello from spinner</p>
    </div>
  )}

export default Spinner
