import { useState } from 'react';
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks/store"
import { removeCart, setoggleCart } from "../../slices/cartSlice"
import PriceSummary from "./PriceSummary"



export const Cart = () => {

  const [deleteElement, setDeleteElement] = useState(false);
  const { cartProducts } = useAppSelector(state => state.cart)
  const dispatch = useDispatch();

  const deleteProduct = (id: string) => {
    setDeleteElement(false);
    dispatch(removeCart(id));

  }

  return (
    <div
      className='bg-white rounded-md px-4 py-2 z-10 absolute left-0 min-w-[80%]
      min-h-[100%] md:min-h-[500px] md:relative flex flex-col'
    >
      <h2 className='font-bold'>Order Summary</h2>
      <span className='font-bold absolute right-2 top-1 md:hidden cursor-pointer' onClick={() => dispatch(setoggleCart(false))}>X</span>
      <span>Below is a list of your items</span>
      {
        cartProducts.map(product => (
          <button className={`w-full flex flex-row items-center justify-between my-4 hover:bg-red-100 cursor-pointer`} key={product.id}
            onClick={() => { setDeleteElement(true) }}
            onBlur={() => { setDeleteElement(false) }}
          >
            <div className="flex">
              <img src={product.selection[0]?.img} alt={product.name} className='rounded-md w-[70px]' />
              <div className='flex flex-col ml-1'>
                <span className='w-full'>{product.name}</span>
                <span className='text-[12px]'>Quantity : {product.quantity}</span>
              </div>
            </div>
            <div className='font-bold'>${product.price.toFixed(2)}</div>
            {deleteElement && <div className="font-bold px-4" onClick={(e) => { e.stopPropagation(); deleteProduct(product.id) }}> X </div>}
          </button>
        ))
      }
      <hr />

      {cartProducts.length > 0 && <PriceSummary />}

    </div >)
}
