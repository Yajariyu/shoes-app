import { FC } from 'react';

interface AddCartProps {
  handleAddCart: () => void
}

const AddCart: FC<AddCartProps> = ({ handleAddCart }) => {

  return (
    <div className='bg-gray-200 rounded-md  w-[80%] md:min-w-[65%] py-3 px-4 fixed bottom-2 ' onClick={handleAddCart}>
      <button className='bg-purple-600 rounded-full px-2 py-2 text-white'>Add to Cart</button>
    </div>
  )
}

export default AddCart