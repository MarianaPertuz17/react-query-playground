import { useInfiniteQuery, useQuery } from "react-query"
import { getCharactersPaginated } from "../../api/characters";
import BottomMedia from '../../components/bottomMedia';
import { InfiniteCard } from '../../components/infiniteCard';
import styles from './styles.module.css'


export function InfiniteCharacters () {

  const { 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage, 
    data,
  } = useInfiniteQuery('characters', ({pageParam = 1}) => getCharactersPaginated(pageParam), {
    getNextPageParam: prevData => prevData.nextPage,
  });
  
  return (
    <>
      <div className={styles.container}>
      {data?.pages.length > 0 && (
        data.pages.map((page) => {
          return page.characters.results.map(character => <InfiniteCard key={character.id} character={character}/>)
      })
      )}
      <BottomMedia
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
      </div>
    </>    
  )
}