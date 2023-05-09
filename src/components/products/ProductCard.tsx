import { FC } from 'react'
import { Link } from "react-router-dom";
import { Product } from '../../types/product'
import Skeleton from 'react-loading-skeleton';

interface ProductCard {
  product: Product
}
export const ProductCard: FC<ProductCard> = ({ product }) => {
  return (
    <Link className="rounded-lg shadow-lg flex flex-col justify-center items-center bg-white py-2 px-2 h-min" key={product.id} to={`/${product.id}`}>
      <div className='w-full rounded-lg pb-[70%] bg-cover' style={{ backgroundImage: `url(${product.colors[0].img})` }} ></div>
      <div className='w-full flex justify-between mt-2'><h4>{product.name}</h4> <span className='font-bold'>{`${product.price}` || <Skeleton />}</span></div>
      <span className='w-full flex flex-start text-[12px]'>{`${product.colors.length} Colorways` || <Skeleton />}</span>
    </Link >
  )
}