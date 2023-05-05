import { FC, useState } from 'react';
import { Color, Product } from '../../types/product'
import { AiOutlineUser, AiFillStar } from 'react-icons/ai'
import { ratingData } from '../../mockData/ratingData';
import AddCart from '../cart/AddCar';

interface ProductDetail {
  product: Product
}

const ProductDetail: FC<ProductDetail> = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(product.colors[0]);

  const handleSelectedColor = (color: Color) => {
    setColorSelected(color)
  };


  return (
    <div className='bg-white rounded-sm flex flex-col px-8 py-12'>
      <div className='w-full flex flex-col lg:flex-row'>
        <div className='w-full'>
          <img src={colorSelected.img} alt={product.name} className='w-full h-full rounded-lg' />
        </div>
        <div className='py-2 px-4 w-full lg:min-w-[65%] xl:min-w-[70%] self-center'>
          <h2 className='font-bold text-[22px]'>{product.name}</h2>
          <span className='text-purple-600 font-semibold'>${product.price.toFixed(2)}</span>
          <p className='text-justify my-2 text-[14px]'>{product.fullDescription}</p>
          <hr />
          <div className='my-2'>
            <h3 className=''>Shoe Size</h3>
            <div className="w-full flex flex-row my-4">
              {product.sizes.map(size => (
                <span className='rounded-full bg-purple-600 px-3 mx-3 text-white cursor-pointer'>Size {size}</span>
              ))}
            </div>
          </div>
          <hr />
          <div className='my-2'>
            <h3>Colors</h3>
            <div className="w-full flex flex-row my-4">
              {product.colors.map(color => (
                <span
                  className={`rounded-full 
                ${colorSelected.color === color.color ? 'bg-purple-600 text-white' : 'bg-white'}
                 px-3 mx-3 cursor-pointer`}
                  onClick={() => handleSelectedColor(color)}
                >{color.color}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 '>
        <h3 className='font-bold'>Ratings</h3>
        <p className='mb-2'>Read the rating for this product below</p>
        {
          ratingData.map(rating => (
            <div className='border border-gray-400 rounded-md py-2 px-2 relative my-2'>
              <div className='absolute right-1 top-1 text-purple-700 flex items-center'>
                <span className='font-bold text-black'>{rating.rating} </span><AiFillStar />
              </div>
              <div className='text-purple-600 flex items-center'><AiOutlineUser /><span className='mx-2'>{rating.user}</span>

              </div>
              <p>{rating.description}</p>
            </div>
          ))
        }
      </div >
      <AddCart />
    </div>
  )
}

export default ProductDetail