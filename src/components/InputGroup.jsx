
export default function InputGroup ({ label, type, id, name, placeholder, required, initialValue }) {
  return (
    <div className='form-floating'>
      <input type={type} className='form-control' name={name} id={id} placeholder={placeholder} required={required} value={initialValue} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export function SelectGroup ({ children, defaultValue, label, placeholder, required, id, name }) {
  return (
    <div className='form-floating'>
      <select className='form-select' id={id} name={name} aria-label='Floating label select example' required={required}>
        <option value=''>{placeholder}</option>
        {children}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
