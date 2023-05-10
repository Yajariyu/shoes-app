import { FC, PropsWithChildren } from 'react';

interface ModalProps {
  closeModal: () => void
}
const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-end font-bold text-red-600 text-[32px] cursor-pointer" onClick={closeModal}>x</div>
        {children}
      </div>
    </div>
  )
}

export default Modal