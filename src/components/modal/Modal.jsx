
export default function Modal ({ children, id, textSuccess, title }) {
  return (
    <div className='modal fade' id={id} data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='staticBackdropLabel'>{title}</h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-body'>
            {children}
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-outline-danger' data-bs-dismiss='modal'>Close</button>
            <button type='button' className='btn btn-outline-success'>{textSuccess}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
