import { FC } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { setoggleCart } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

interface AddCartProps {
  handleAddCart: () => void
}

const AddCart: FC<AddCartProps> = ({ handleAddCart }) => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  const handleAdd = () => {
    handleAddCart();
    if (width <= 768) dispatch(setoggleCart(true))
    window.scroll(0, 0)
  }


  return (
    <div className='bg-gray-200 rounded-md  w-[80%] md:min-w-[65%] py-3 px-4 fixed bottom-2 ' onClick={handleAdd}>
      <button className='bg-purple-600 rounded-full px-2 py-2 text-white'>Add to Cart</button>
    </div>
  )
}

export default AddCart