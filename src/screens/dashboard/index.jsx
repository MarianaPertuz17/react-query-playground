import { useQuery } from "react-query"
import { getCharacters } from "../../api/characters"
import { CharacterCard } from "../../components/characterCard"
import styles from './styles.module.css'


export function Dashboard () {

  const { data: characters, isFetching, isError, error } = useQuery(['characters'], getCharacters)

  if (isFetching) return <p>Loading...</p>
  if (isError) return <p>{error.message}</p>
  
  return (
    <div className={styles.container}>
      {characters.results.map(character => <CharacterCard key={character.id} character={character}/>)}
    </div>    
  )
}