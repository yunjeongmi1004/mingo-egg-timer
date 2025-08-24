import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false)
  const [isModalCancel, setIsModalCancel] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsModalConfirm(false)
    setIsModalCancel(false)
  }

  const confirmModal = () => {
    setIsModalConfirm(true)
    closeModal()
  }

  const cancelModal = () => {
    setIsModalCancel(true)
    closeModal()
  }

  return {
    isModalOpen,
    isModalConfirm,
    isModalCancel,
    openModal,
    closeModal,
    confirmModal,
    cancelModal
  }
}

export default useModal