import useGetData from '../../hooks/useGetData'
import Loader from '../loader/Loader'
import GroupOpenModal from '../groupOpenModal/GroupOpenModal'
import serviceGetAllCompanies from '../../services/serviceGetAllCompanies'

export default function Company () {
  const { data, loading } = useGetData(serviceGetAllCompanies)
  if (loading) return <Loader />
  return (
    <div className='m-auto container mt-3 d-flex flex-column gap-3'>
      {data.map(company => (
        <div className='card shadow-sm' key={company.id}>
          <div className='card-body'>
            <h5 className='card-title fw-bold fs-1'>{company.name}</h5>
            {company.owner && <p className='card-subtitle mb-2 fs-5 fw-medium'>Owner: <span className='text-muted'>{company.owner.name}</span></p>}
            <h6 className='card-subtitle mb-2 text-muted fs-6'>{company.address}</h6>
            <div className='d-flex gap-4 fs-6'>
              <p className='card-text m-0'>Employees: {company.employees.length}</p>
              <p className='card-text m-0'>Suppliers: {company.suppliers.length}</p>
            </div>
          </div>
        </div>
      ))}
      <GroupOpenModal textButton='Add new company' textSucces='New company'>
        <h1>Hola</h1>
      </GroupOpenModal>
    </div>
  )
}
