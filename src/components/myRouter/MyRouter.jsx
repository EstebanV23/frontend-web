import { Route, Routes } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import NotFound from '../notFound/NotFound'
import Company from '../company/Company'
import Employee from '../employee/Employee'

export default function MyRouter () {
  return (
    <Routes>
      <Route path='*' element={<Navbar />}>
        <Route path='companies' element={<Company />} />
        <Route path='employees' element={<Employee />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
