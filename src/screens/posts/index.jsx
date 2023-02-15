import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { getCharactersPaginated } from "../../api/characters"
import { CharacterCard } from "../../components/characterCard"
import styles from './styles.module.css'

const initialFormData = {
  title: '',
  description: '',
}

export function Posts () {
  const [ formData, setFormData ] = useState(initialFormData);
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { value, name, type } = e.target;
    if (type === 'radio') setSelectedUser(value);
    else setFormData(prevState => ({...prevState, [name]: value}));
  }

  const createPostMutation = useMutation()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input placeholder='Title' name='title' value={formData.title} type='text' onChange={handleChange}/>
      <input placeholder='Password' name='password' value={formData.password} type='password' onChange={handleChange}/>
      <button type='submit'>Log in</button>
    </form>  
  )
}