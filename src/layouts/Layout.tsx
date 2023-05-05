import { FC, PropsWithChildren } from "react"
import { Cart } from "../components/cart/Cart"


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 h-full md:min-h-screen lg:px-8">
      <div className='w-0 md:w-[35%] px-2 py-4'>
        <Cart />
      </div>
      <div className='w-full flex justify-center px-2 py-4'>
        {children}
      </div>
    </div>
  )
}
