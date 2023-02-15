import axios from "axios"

export function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then(res => res.data)
}

export function getCharactersPaginated(page) {
  return axios
    .get("https://rickandmortyapi.com/api/character", {
      params: { page: page },
    })
    .then(res => {
      return {
        nextPage: res.data.info.next ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        characters: res.data,
      }
    })
}