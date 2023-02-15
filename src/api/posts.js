export function createPost({ title, body }) {
  return axios
    .post("http://localhost:3000/posts", {
      title,
      body
    })
    .then(res => res.data)
}