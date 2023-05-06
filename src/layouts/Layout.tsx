import { FC, PropsWithChildren, useState, useEffect } from 'react';
import { Cart } from "../components/cart/Cart"
import { useWindowSize } from '../hooks/useWindowSize';
import { AiFillShop } from 'react-icons/ai';


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width <= 768) setOpen(false)
    else setOpen(true)
  }, [width])

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 h-full md:min-h-screen lg:px-8">
      <div className='w-0 md:w-[35%] px-2 md:py-4'>
        {open && <Cart setOpen={setOpen} />}
      </div>
      <div className='px-16 text-purple-800 text-[30px] py-4 md:hidden bg-purple-300' onClick={() => setOpen(true)}><AiFillShop /></div>
      <div className='w-full flex justify-center px-2 py-4'>
        {children}
      </div>
    </div >
  )
}
