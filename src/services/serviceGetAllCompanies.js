import { URL_BACKEND } from '../constants/config'

export default function serviceGetAllCompanies () {
  return fetch(`${import.meta.env.VITE_URL_BACKEND ?? URL_BACKEND}/company/`).then(response => response.json())
}
