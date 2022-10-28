import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContext } from './ModalContext'
import { css } from 'react-emotion'

const modalOverlay = css({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,0.8)',
})

const Modal = () => {
  const { modalContent, modal, handleModal } = React.useContext(ModalContext)

  if (!modal) return null

  return ReactDOM.createPortal(
    <div className={modalOverlay} onClick={handleModal}>
      {modalContent}
    </div>,
    document.querySelector('#modal-root')
  )
}

export default Modal
