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
      console.log(res.data, 'data')
      return {
        nextPage: res.data.info.next ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        characters: res.data,
      }
    })
}

export function getCharacter(id) {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => res.data)
}

export function createCharacter({ title, body }) {
  return axios
    .character("http://localhost:3000/characters", {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then(res => res.data)
}