import { FC } from 'react'
import { useAppSelector } from '../../hooks/store'

const PriceSummary: FC = () => {

  const { total, base, taxes } = useAppSelector(state => state.cart);

  return (
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
  )
}

export default PriceSummary