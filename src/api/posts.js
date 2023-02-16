import axios from "axios";

export function createPost(post) {
  const { title, description } = post
  return axios
    .post("http://localhost:3000/posts",{
      title,
      description,
      id: Date.now()
    })
    .then(res => console.log(res, 'lla res'))
    .catch(e => console.log(e, 'error'))
}
