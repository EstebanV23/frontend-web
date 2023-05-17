import useGetData from '../../hooks/useGetData'
import Loader from '../loader/Loader'
import GroupOpenModal from '../groupOpenModal/GroupOpenModal'
import serviceGetAllEmployees from '../../services/serviceGetAllEmployees'
import FormNewEmployee from '../formNewEmployee/FormNewEmployee'

export default function Employee () {
  const { data, loading } = useGetData(serviceGetAllEmployees)
  if (loading) return <Loader />
  return (
    <div className='m-auto container mt-3 d-flex flex-column gap-3'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(employee => (
            <tr key={employee.id}>
              <th scope='row'>{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <GroupOpenModal textButton='Add new Employee' textSucces='New employee'>
        <FormNewEmployee />
      </GroupOpenModal>
    </div>
  )
}
