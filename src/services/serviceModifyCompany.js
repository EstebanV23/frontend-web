import { URL_BACKEND } from '../constants/config'

export default function serviceModifyCompany (id, data) {
  return fetch(`${URL_BACKEND}/company/update/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.data)
}
