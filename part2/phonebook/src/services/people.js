import axios from 'axios'

const baseURL = 'https://stormy-headland-70337.herokuapp.com/api/persons'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then((response) => response.data)
}

const addData = (newObject) => {
  const request = axios.post(baseURL, newObject)
  return request.then((response) => response.data)
}

const deleteData = (id, newObject) => {
  const request = axios.delete(`${baseURL}/${id}`, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject)
  return request.then((response) => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { addData, getAll, deleteData, update }
