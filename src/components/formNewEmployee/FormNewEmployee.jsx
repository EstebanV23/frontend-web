import { useId, useState } from 'react'
import { ButtonSuccess } from '../Buttons'
import InputGroup, { SelectGroup } from '../InputGroup'
import useGetData from '../../hooks/useGetData'
import Loader from '../loader/Loader'
import serviceGetAllCompanies from '../../services/serviceGetAllCompanies'
import serviceNewEmployee from '../../services/serviceNewEmployee'

export default function FormNewEmployee () {
  const idNombre = useId()
  const idEmail = useId()
  const idCompany = useId()
  const { data, loading } = useGetData(serviceGetAllCompanies)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.target))
    const { name, email, company } = values
    const data = await serviceNewEmployee({ name, email })
    if (data.error) {
      setError(true)
    }
  }
  if (loading) return <Loader />
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column gap-3 mb-3'>
          <InputGroup id={idNombre} label='Name' placeholder='Your Name' name='name' type='text' required />
          <InputGroup id={idEmail} label='Email' placeholder='Your Email' name='email' type='email' required />
          <SelectGroup id={idCompany} name='company' placeholder='Select company' label='Company'>
            {data.map(company => (
              <option key={company.id} value={company.id}>{company.id} - {company.name}</option>
            ))}
          </SelectGroup>
        </div>
        <ButtonSuccess type='submit'>Add Employee</ButtonSuccess>
      </form>
    </section>
  )
}
