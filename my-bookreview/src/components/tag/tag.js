import React from 'react'
import styles from './tag.module.scss'

function Tag(props){
  return(
    <span className ={styles.tag}>{props.label}</span>
  )}

export default Tag
