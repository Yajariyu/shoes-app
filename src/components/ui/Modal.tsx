import { FC, PropsWithChildren } from 'react';

const Modal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 h-fit">{children}</div>
    </div>
  )
}

export default Modal