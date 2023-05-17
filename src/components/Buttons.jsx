export function ButtonSuccess ({ children, type, onClick }) {
  return (
    <button type={type} className='btn btn-outline-success' onClick={onClick}>{children}</button>
  )
}

export function ButtonDanger ({ children, type, onClick }) {
  return (
    <button type={type} className='btn btn-outline-danger' onClick={onClick}>{children}</button>
  )
}
