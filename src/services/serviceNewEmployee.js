import { URL_BACKEND } from '../constants/config'

export default function serviceNewEmployee (data) {
  return fetch(`${URL_BACKEND}/employee/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}
