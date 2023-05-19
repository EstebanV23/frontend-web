import { URL_BACKEND } from '../constants/config'

export default function serviceModifyEmployee (id, data) {
  return fetch(`${URL_BACKEND}/employee/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}
