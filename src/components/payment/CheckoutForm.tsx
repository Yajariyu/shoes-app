import { useState } from "react";
import Cards from 'react-credit-cards-2';
import InputMask from 'react-input-mask';
import { validationField, validationForm } from '../../helpers/cardValidation';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import MyInput from "../ui/MyInput";

type FormValues = {
  cvc: string,
  expiry: string,
  focus: string,
  name: string,
  number: string,
};



export const CheckoutForm = () => {
  const [creditForm, setCreditForm] = useState<FormValues>({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [error, setError] = useState<FormValues>({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  // const onSubmit = handleSubmit((data) => console.log(data));


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let { value } = e.target;
    const arrayPattern = ['number', 'expiry']
    if (arrayPattern.includes(name)) {
      value = validationField[name as keyof typeof validationField](value as string) || value;
    }
    setCreditForm({ ...creditForm, [name]: value })
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let { value } = e.target;
    value = validationForm[name as keyof typeof validationForm](value as string) || '';
    setError({ ...error, [name]: value })

  }
  return (
    <div id="PaymentForm" className=" flex flex-col md:flex-row md:items-center justify-start w-full">
      <div className="mx-2">
        <Cards
          cvc={creditForm.cvc}
          expiry={creditForm.expiry}
          name={creditForm.name}
          number={creditForm.number}
        />
      </div>
      <form className="">
        <div className="flex flex-col">
          <MyInput
            name="number"
            type="tel"
            placeholder="Card Number"
            value={creditForm.number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.number}
          />
          <MyInput
            name="name"
            type="text"
            placeholder="Name"
            value={creditForm.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="flex justify-between">
            <div className="w-1/2">
              <InputMask
                name="cvc"
                type="tel"
                mask="999"
                placeholder="CVC"
                className="rounded-full border px-2 py-1"
                value={creditForm.cvc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.cvc && <div className="text-red-500 text-[12px]">{error.cvc}</div>}
            </div>
            <div className="w-1/2">
              <InputMask
                name="expiry"
                type="tel"
                mask="99/99"
                placeholder="MM/YYYY"
                className="rounded-full border px-2 py-1 "
                value={creditForm.expiry}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.expiry && <div className="text-red-500 text-[12px]">{error.expiry}</div>}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-purple-300 rounded-full px-5 font-bold py-1 mt-2">Pay</button>
        </div>
      </form>
    </div>
  );
};