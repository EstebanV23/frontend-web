import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-body-tertiary'>
        <div className='container m-auto'>
          <NavLink className='navbar-brand fs-1 fw-bolder' to='/'>EV</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' aria-current='page' to='/companies'>Companies</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>Pricing</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
