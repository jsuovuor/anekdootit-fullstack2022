import axios from 'axios'

export const baseUrl = 'https://anekdootit-fullstack2022.herokuapp.com/api/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const anecdoteToDb = {
    content: content,
    votes: 0
  }
  const response = await axios.post(baseUrl, anecdoteToDb)
  return response.data
}

const update = async (content) => {
  const url = baseUrl+`/${content.id}`
  const response = await axios.put(url, content)
  return response.data
}

export default { getAll, createNew, update }