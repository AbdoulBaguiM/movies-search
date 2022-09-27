/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const getAll = () => {
  const request = axios.get('/all')
  return request.then((response) => response.data)
}

const search = (title, order, genres) => {
  const params = {
    title,
    order,
    genres,
  }

  const request = axios.get('/api/movies', { params })
  return request.then((response) => response.data)
}

export default { getAll, search }
