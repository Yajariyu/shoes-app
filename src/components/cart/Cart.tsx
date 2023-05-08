import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/store"
import { setoggleCart } from "../../slices/cartSlice"
import PriceSummary from "./PriceSummary"

export const Cart = () => {
  const { cartProducts } = useAppSelector(state => state.cart)
  const dispatch = useDispatch();
  return (
    <div className='bg-white rounded-md px-4 py-2 z-10 absolute left-0 min-w-[80%] min-h-[100%] md:min-h-[500px] md:relative flex flex-col'>
      <h2 className='font-bold'>Order Summary</h2>
      <span className='font-bold absolute right-2 top-1 md:hidden cursor-pointer' onClick={() => dispatch(setoggleCart(false))}>X</span>
      <span>Below is a list of your items</span>
      {
        cartProducts.map(product => (
          <div className='w-full flex flex-row items-center justify-between my-4' key={`${product.id} + ${product.selection[0].color}`}>
            <div className="flex">
              <img src={product.selection[0]?.img} alt={product.name} className='rounded-md w-[70px]' />
              <div className='flex flex-col ml-1'>
                <span className='w-full'>{product.name}</span>
                <span className='text-[12px]'>Quantity : {product.quantity}</span>
              </div>
            </div>
            <div className='font-bold'>${product.price.toFixed(2)}</div>
          </div>
        ))
      }
      <hr />

      {cartProducts.length > 0 && <PriceSummary />}

    </div>)
}
