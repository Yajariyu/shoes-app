import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { CheckoutForm } from '../payment/CheckoutForm';
import { deleteCart } from '../../slices/cartSlice';
import Modal from '../ui/Modal';

const PriceSummary: FC = () => {
  const { total, base, taxes } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch()

  const [paymentForm, setPaymentForm] = useState(false)

  return (
    <>
      <div className='flex flex-col justify-between h-full grow py-8'>
        <div className='mt-4 min-h-full grow'>
          <h3 className='font-bold mb-2'>Price Breakdown</h3>
          <div className='flex flex-col'>
            <span className='flex justify-between'>Base Price <span>${base}</span></span>
            <span className='flex justify-between'>Taxes: <span>${taxes}</span></span>
            <span className='flex justify-between mt-2'>Total:<span>${total}</span></span>
          </div>
        </div>
        <div className='w-full flex justify-between mt-4'>
          <button className="bg-red-100 rounded-full px-4 py-2 font-bold" onClick={() => dispatch(deleteCart())}>Cancel</button>
          <button className="bg-purple-200 rounded-full px-2 py-2 font-bold" onClick={() => setPaymentForm(true)}>Continue</button>
        </div>
      </div>
      {paymentForm && <Modal closeModal={() => setPaymentForm(false)}>
        <CheckoutForm close={() => setPaymentForm(false)} />
      </Modal>}
    </>
  )
}

export default PriceSummary