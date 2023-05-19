import { useId, useState } from 'react'
import { ButtonSuccess } from '../Buttons'
import InputGroup, { SelectGroup } from '../InputGroup'
import useGetData from '../../hooks/useGetData'
import Loader from '../loader/Loader'
import serviceGetAllCompanies from '../../services/serviceGetAllCompanies'
import serviceNewEmployee from '../../services/serviceNewEmployee'
import toast from 'react-hot-toast'
import serviceModifyCompany from '../../services/serviceModifyCompany'

export default function FormNewEmployee ({ setAction, service, initialValues }) {
  const { name, email } = initialValues || {}
  const idNombre = useId()
  const idEmail = useId()
  const idCompany = useId()
  const { data, loading } = useGetData(serviceGetAllCompanies)
  const [load, setLoad] = useState(false)
  service = service || serviceNewEmployee

  const handleSubmit = async (e) => {
    setLoad(true)
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.target))
    const { name, email, company } = values
    const data = await service({ name, email })
    if (data.error) {
      toast.error(data.message)
      setLoad(false)
      return
    }
    toast.success(data.message)
    console.log({ data })
    const employee = data.data
    e.target.reset()
    setAction(action => action + 1)
    console.log(company)
    const correctModify = await serviceModifyCompany(company, { employees: [{ id: employee.id }] })
    console.log(correctModify)
    setLoad(false)
  }
  if (loading) return <Loader />
  return (
    <section>
      {load && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column gap-3 mb-3'>
          <InputGroup initialValue={name} id={idNombre} label='Name' placeholder='Your Name' name='name' type='text' required />
          <InputGroup initialValue={email} id={idEmail} label='Email' placeholder='Your Email' name='email' type='email' required />
          <SelectGroup id={idCompany} name='company' placeholder='Select company' label='Company'>
            {data.map(company => (
              <option key={company.id} value={company.id}>{company.id} - {company.name}</option>
            ))}
          </SelectGroup>
        </div>
        <ButtonSuccess type='submit'>{initialValues ? 'Modify' : 'Add'} Employee</ButtonSuccess>
      </form>
    </section>
  )
}
