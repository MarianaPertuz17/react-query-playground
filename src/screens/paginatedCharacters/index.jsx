import { useState } from "react"
import { useQuery } from "react-query"
import { getCharactersPaginated } from "../../api/characters"
import { CharacterCard } from "../../components/characterCard"
import styles from './styles.module.css'


export function PaginatedCharacters () {

  const [ page, setPage ] = useState(1)

  const { 
    data, 
    isFetching, 
    isError, 
    error, 
  } = useQuery(['characters'], () => getCharactersPaginated(page), { keepPreviousData: true})

  if (isFetching) return <p>Loading...</p>
  if (isError) return <p>{error.message}</p>
  
  return (
    <div>
      <div className={styles.container}>
        {data.characters.results.map(character => <CharacterCard key={character.id} character={character}/>)}
      </div>   
      {data.previousPage && (
        <button onClick={() => setPage(data.previousPage)}>Previous</button>
      )}{" "}
      {data.nextPage && (
        <button onClick={() => setPage(data.nextPage)}>Next</button>
      )}

    </div>    
  )
}