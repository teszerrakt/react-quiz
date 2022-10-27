import React from 'react'
import { useModal } from './useModal'
import Modal from './Modal'

export const ModalContext = React.createContext()

export const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal()
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}
