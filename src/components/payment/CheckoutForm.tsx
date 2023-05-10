import Cards from 'react-credit-cards-2';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { errorsForm } from '../../helpers/cardValidation';
import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useAppDispatch } from '../../hooks/store';

import { FC } from 'react';
import { deleteCart } from '../../slices/cartSlice';


type IFormValues = {
  cvc: string,
  expiry: string,
  name: string,
  number: string,
};
interface CheckoutFormProps {
  close: () => void
}

const schema = yup.object({
  cvc: yup.string().required().min(3).max(3),
  expiry: yup.string().min(5).test('validateExpiry', 'Invalid Expiry date',
    (value) => {
      if (!value) return false
      const currentDate = new Date();
      const currentYear = Number(currentDate.getFullYear().toString().slice(2,));
      const [month, year] = value.split('/');
      if (!month || !year) return false
      if (Number(month) > 12) {
        return false
      } if (Number(year) >= currentYear && Number(year) <= currentYear + 10) {
        return true
      }
      return false
    }).required(),
  name: yup.string().required().min(3),
  number: yup.string().min(19).test('validateExpiry', 'Invalid card Number',
    (value) => {
      value?.replace(/\D/g, '');
      const validate = /^\d{16}$/.test(value?.replace(/ /g, "") || '');
      return validate ? true : false;
    }).required(),
}).required();


export const CheckoutForm: FC<CheckoutFormProps> = ({ close }) => {

  const dispatch = useAppDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormValues>({
    resolver: yupResolver(schema)
  });

  const handlePay = () => {
    toast("Payment in Process", {
      onClose: () => setTimeout(() => { close(); dispatch(deleteCart()) }, 3000),
    });

  }

  return (
    <div id="PaymentForm" className=" flex flex-col md:flex-row md:items-center justify-start w-full" >
      <div className="mx-2">
        <Cards
          cvc={watch('cvc') || ''}
          expiry={watch('expiry') || ''}
          name={watch('name') || ''}
          number={watch('number') || ''}
        />
      </div>
      <form className="">
        <div className="flex flex-col">
          <InputMask
            type="tel"
            mask="9999 9999 9999 9999"
            placeholder="Card Number"
            className="rounded-full border px-2 py-1 w-full my-2"
            {...register('number')}
          />
          {errors.number && <span className="text-red-500 text-[12px]">{errorsForm.number}</span>}

          <input
            type="text"
            placeholder="Name"
            className="rounded-full border px-2 py-1 w-full my-2"
            {...register('name')}
          />
          {errors.name && <span className="text-red-500 text-[12px]">{errorsForm.name}</span>}

          <div className="flex justify-between">
            <div className="w-1/2">
              <InputMask
                type="tel"
                mask="999"
                placeholder="CVC"
                className="rounded-full border px-2 py-1 "
                {...register('cvc')}
              />
              {errors.cvc && <div className="text-red-500 text-[12px]">{errorsForm.cvc}</div>}
            </div>
            <div className="w-1/2">
              <InputMask
                type="tel"
                mask="99/99"
                placeholder="MM/YYYY"
                className="rounded-full border px-2 py-1 "
                {...register('expiry')}
              />
              {errors.expiry && <div className="text-red-500 text-[12px]">{errorsForm.expiry}</div>}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-300 rounded-full px-5 font-bold py-1 mt-2" onClick={handleSubmit(handlePay)}>Pay</button>
        </div>
      </form>

      {/**Toaster to Indicate Payment */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </div >
  );
};