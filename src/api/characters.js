import axios from "axios"

export function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character", { params: { _sort: "title" } })
    .then(res => res.data)
}

export function getCharactersPaginated(page) {
  return axios
    .get("https://rickandmortyapi.com/api/character", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then(res => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"])
      return {
        nextPage: hasNext ? page + 1 : undefined,
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