import styles from './styles.module.css'

export function CharacterCard ({ character }) {
  const { name, gender, image, status } = character;

  return (
    <div className={styles.cardContainer}>
      <img src={image} alt='character'/>
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
    </div>
  )
}