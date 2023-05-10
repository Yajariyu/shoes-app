import { FC, useState } from 'react';
import { Color, Product } from '../../types/product'
import { useAppDispatch } from '../../hooks/store';
import { ProductCart } from '../../types/cart';
import { addCart } from '../../slices/cartSlice';
import AddCart from '../cart/AddCar';
import { Rating } from './Rating';
import { SelectionComponent } from './SelectionComponent';
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';

interface ProductDetail {
  product: Product
}

const ProductDetail: FC<ProductDetail> = ({ product }) => {
  const [colorSelected, setColorSelected] = useState(product.colors[0]);
  const [sizeSelected, setsizeSelected] = useState(product.sizes[0]);
  const dispatch = useAppDispatch();

  const handleSelectedColor = (color: Color) => {
    setColorSelected(color)
  };

  const handleSelectSize = (size: string) => {
    setsizeSelected(size);
  }

  const handleAddCart = () => {
    const productAdd: ProductCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      selection: {
        idColor: colorSelected.id,
        size: sizeSelected,
        color: colorSelected.color,
        img: colorSelected.img
      }
    }
    dispatch(addCart(productAdd))
  }

  return (
    <div className='bg-white w-full rounded-sm flex flex-col px-8 py-12'>
      <Link className="text-[24px] font-bold" to="/"><AiOutlineDoubleLeft /></Link>
      <div className='w-full flex flex-col lg:flex-row min-h-[300px]'>
        <div className='w-full'>
          <div className='w-full rounded-lg pb-[70%] bg-cover' style={{ backgroundImage: `url(${colorSelected.img})` }}></div>
        </div>
        <div className='py-2 px-4 min-w-[60%] self-center'>
          <h2 className='font-bold text-[22px]'>{product.name}</h2>
          <span className='text-purple-600 font-semibold'>${product.price.toFixed(2)}</span>
          <p className='text-justify my-2 text-[14px]'>{product.fullDescription}</p>
          <hr />
          <SelectionComponent
            label="Shoe Size"
            collection={product.sizes}
            handleFunction={(item) => handleSelectSize(item as string)}
            selected={sizeSelected}
          />
          <hr />
          <SelectionComponent
            label="Colors"
            collection={product.colors}
            handleFunction={(item) => handleSelectedColor(item as Color)}
            prop={"color"}
            selected={colorSelected}
          />
        </div>
      </div>
      <Rating />
      <AddCart handleAddCart={handleAddCart} />
    </div >
  )
}

export default ProductDetail