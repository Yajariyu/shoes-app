import { FC } from 'react'
import { Link } from "react-router-dom";
import { Product } from '../../types/product'

interface ProductCard {
  product: Product
}
export const ProductCard: FC<ProductCard> = ({ product }) => {
  return (
    <Link className=" rounded-lg shadow-lg flex flex-col justify-center items-center bg-white py-2 px-2 max-w-sm h-min max-h-[350px]" key={product.id} to={`/${product.id}`}>
      <img src={product.colors[0].img} alt={product.name} className='w-full rounded-lg' />
      <div className='w-full flex justify-between mt-2'><h4>{product.name}</h4> <span className='font-bold'>${product.price}</span></div>
      <span className='w-full flex flex-start text-[12px]'>{product.colors.length} Colorways</span>
    </Link>
  )
}