import { URL_BACKEND } from '../constants/config'

export default function serviceGetAllEmployees () {
  return fetch(`${import.meta.env.VITE_URL_BACKEND ?? URL_BACKEND}/employee/`).then(response => response.json())
}
