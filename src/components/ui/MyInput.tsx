import { FC } from 'react';


interface MyInputProps {
  name: string;
  type: string;
  placeholder?: string;
  classes?: React.CSSProperties;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const MyInput: FC<MyInputProps> = ({ name, type, placeholder = '', classes, value, onChange, onBlur, error }) => {
  return (
    <div className='w-full'>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`rounded-full border px-2 py-1 w-full my-2 ${classes}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className="text-red-500 text-[12px]">{error}</span>}
    </div>
  )
}

export default MyInput