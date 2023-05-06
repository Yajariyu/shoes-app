import { useAppSelector } from "../../hooks/store"

export const Cart = () => {

  const { cartProducts, total, base, taxes } = useAppSelector(state => state.cart)

  return (
    <div className='bg-white rounded-md px-4 py-2 z-10 absolute left-0 min-w-[80%] min-h-[100%] md:min-h-[500px] md:relative flex flex-col'>
      <h2 className='font-bold'>Order Summary</h2>
      <span className='font-bold absolute right-2 top-1 md:hidden'>X</span>
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
      <div className='flex flex-col justify-between h-full grow py-8'>
        <div className='mt-4 min-h-full grow'>
          <h3>Price Breakdown</h3>
          <div className='flex flex-col'>
            <span className='flex justify-between'>Base Price <span>${base}</span></span>
            <span className='flex justify-between'>Taxes: <span>${taxes}</span></span>
            <span className='flex justify-between'>Shipping Fee</span>
            <span className='flex justify-between mt-2'>Total:<span>${total}</span></span>
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <button className="bg-red-100 rounded-full px-4 py-2 font-bold">Cancel</button>
          <button className="bg-purple-200 rounded-full px-2 py-2 font-bold">Continue</button>
        </div>
      </div>

    </div>
  )
}
