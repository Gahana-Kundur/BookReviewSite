import React from 'react'
import styles from './book.module.scss'
import malgudiPic from './malgudidays.jpg'
import alchemistPic from './thealchemist.jpg'

function Book(props){
  let pic;
  let tags=(
    <p>
      {props.tags.map((tag)=>(
        <span>{tag}</span>
      ))}
    </p>

  )

  let metadata;
  if(props.complete){
    metadata= <p>{'⭐'.repeat(props.rating)}</p>
  }else{
    metadata=<p><progress value={props.progress} max="100" /></p>
  }

  if(props.title === 'Malgudi days'){
    pic = malgudiPic
  } else if (props.title === 'The Alchemist') {
    pic = alchemistPic
  }


  return(

    <article className={styles.book}>
      <picture className={styles.picture}>
        <img src={pic} alt={props.title} />
      </picture>

      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      {metadata}
      {tags}
    </article>


  )}

export default Book
