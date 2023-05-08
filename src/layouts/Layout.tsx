import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import { Cart } from "../components/cart/Cart"
import { useWindowSize } from '../hooks/useWindowSize';
import { AiFillShop } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { setoggleCart } from '../slices/cartSlice';


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  // const [open, setOpen] = useState(true)
  const { width } = useWindowSize()
  const { open } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch();

  const handleToogleCart = useCallback((value: boolean) => {
    dispatch(setoggleCart(value))
  }, [dispatch])

  useEffect(() => {
    if (width <= 768) handleToogleCart(false)
    else handleToogleCart(true)
  }, [width, handleToogleCart])

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 h-full md:min-h-screen lg:px-8">
      <div className='w-0 md:w-[35%] px-2 md:py-4'>
        {open && <Cart />}
      </div>
      <div className='px-16 text-purple-800 text-[30px] py-4 md:hidden bg-purple-300' onClick={() => handleToogleCart(!open)}><AiFillShop /></div>
      <div className='w-full flex justify-center px-12 md:px-2 py-4'>
        {children}
      </div>
    </div >
  )
}
