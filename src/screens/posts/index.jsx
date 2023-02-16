import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { getCharactersPaginated } from "../../api/characters"
import { createPost } from "../../api/posts"
import { CharacterCard } from "../../components/characterCard"
import styles from './styles.module.css'

const initialFormData = {
  title: '',
  description: '',
}

export function Posts () {
  const [ formData, setFormData ] = useState(initialFormData);

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log('Ready')
    },
    onError: () => console.log('error')
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate(formData)
    setFormData(initialFormData)
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData(prevState => ({...prevState, [name]: value}));
  }

  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='Title' name='title' value={formData.title} type='text' onChange={handleChange}/>
        <input placeholder='Description' name='description' value={formData.description} type='description' onChange={handleChange}/>
        <button type='submit' disabled={createPostMutation.isLoading}>Create Post</button>
      </form> 
    </div>
     
  )
}