import { useId } from 'react'
import Modal from '../modal/Modal'
export default function GroupOpenModal ({ children, textButton, textSuccess }) {
  const idModal = useId()
  return (
    <>
      <div>
        <button type='button' className='btn btn-outline-primary' data-bs-toggle='modal' data-bs-target={`#${idModal}`}>{textButton}</button>
      </div>
      <Modal textSuccess={textSuccess} title={textButton} id={idModal}>
        {children}
      </Modal>
    </>
  )
}
