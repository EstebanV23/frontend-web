import { URL_BACKEND } from '../constants/config'

export default function serviceDeleteEmployee (id) {
  return fetch(`${URL_BACKEND}/employee/delete/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => console.error(error))
}
