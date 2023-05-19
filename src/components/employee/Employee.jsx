import useGetData from '../../hooks/useGetData'
import Loader from '../loader/Loader'
import GroupOpenModal from '../groupOpenModal/GroupOpenModal'
import serviceGetAllEmployees from '../../services/serviceGetAllEmployees'
import FormNewEmployee from '../formNewEmployee/FormNewEmployee'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import serviceDeleteEmployee from '../../services/serviceDeleteEmployee'
import serviceModifyEmployee from '../../services/serviceModifyEmployee'

export default function Employee () {
  const [action, setAction] = useState(0)
  const { data, loading } = useGetData(serviceGetAllEmployees, action)
  const [load, setLoad] = useState(false)
  if (loading) return <Loader />

  const deleteEmployee = async (id, toastId) => {
    toast.dismiss(toastId)
    setLoad(true)
    const deleteEm = await serviceDeleteEmployee(id)
    setLoad(false)
    if (deleteEm.error) {
      toast.error(deleteEm.message)
      return
    }
    toast.success(deleteEm.message)
    setAction(action => action + 1)
  }

  const handleClick = (id) => {
    toast((t) => (
      <div>
        <p className='m-0'>
          Do you want <b className='text-danger'>delete</b>?
        </p>
        <div className='d-flex align-items-center gap-3'>
          <button className='btn btn-success btn-sm' onClick={() => deleteEmployee(id, t.id)}>
            Confirm
          </button>
          <button className='btn btn-danger btn-sm' onClick={() => toast.dismiss(t.id)}>
            Dismiss
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div className='m-auto container mt-3 d-flex flex-column gap-3'>
      {load && <Loader />}
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(employee => (
            <tr key={employee.id}>
              <th scope='row'>{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>
                <div className='d-flex gap-2'>
                  <button className='btn btn-outline-danger btn-sm' onClick={() => handleClick(employee.id)}>Delete</button>
                  <GroupOpenModal textButton={`Update ${employee.name}`} textSucces='New employee'>
                    <FormNewEmployee initialValues={{ name: employee.name, email: employee.email }} service={(values) => serviceModifyEmployee(employee.id, values)} setAction={setAction} />
                  </GroupOpenModal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <GroupOpenModal textButton='Add new Employee' textSucces='New employee'>
        <FormNewEmployee setAction={setAction} />
      </GroupOpenModal>
    </div>
  )
}
