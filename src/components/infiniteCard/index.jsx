import styles from './styles.module.css'
import React from 'react'

export const InfiniteCard = React.forwardRef(({ character }, ref) => {
  const { name, gender, image, status } = character;

  const contentBody = (
    <div className={styles.cardContainer}>
      <img src={image} alt='character'/>
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
    </div>
  )

  const content = ref 
    ? <article ref={ref}>{contentBody}</article>
    : <article>{contentBody}</article>

  return content
})