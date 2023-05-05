import { FC, useState } from 'react';
import { Color, Product } from '../../types/product'


interface ProductDetail {
  product: Product
}

const ProductDetail: FC<ProductDetail> = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(product.colors[0]);

  const handleSelectedColor = (color: Color) => {
    setColorSelected(color)
  };


  return (
    <div className='bg-white rounded-sm flex flex-col px-2 py-4'>
      <div className='w-full flex flex-col lg:flex-row'>
        <div className='w-full'>
          <img src={colorSelected.img} alt={product.name} className='w-full h-full rounded-lg' />
        </div>
        <div className='py-2 px-4 w-full lg:min-w-[70%] xl:min-w-[70%]'>
          <h2 className='font-bold'>{product.name}</h2>
          <span className='text-purple-600 font-semibold'>${product.price.toFixed(2)}</span>
          <p className='text-justify my-2'>{product.fullDescription}</p>
          <hr />
          <div className='my-2'>
            <h3>Shoe Size</h3>
            <div className="w-full flex flex-row my-4">
              {product.sizes.map(size => (
                <span className='rounded-full bg-purple-600 px-3 mx-3 text-white'>Size {size}</span>
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
                 px-3 mx-3 `}
                  onClick={() => handleSelectedColor(color)}
                >{color.color}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductDetail