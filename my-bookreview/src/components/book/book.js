import React from 'react'
import styles from './book.module.scss'
import MalgudiDays from './malgudidays.jpg'
import TheAlchemist from './thealchemist.jpg'

function Book(props){
  return(

    <article className={styles.book}>
      <picture className={styles.picture}>
        <img src={props.imageUrl} alt={props.title} />
      </picture>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <p>{'⭐'.repeat(props.rating)}</p>
      <p>{props.progress}</p>
      <p>{props.tags}</p>
    </article>


  )}

export default Book
