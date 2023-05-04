import { FC } from 'react'
import { Product } from '../../types/product'
import { ProductCard } from './ProductCard'

interface GridProductProps {
  products: Product[]
}
export const GridProduct: FC<GridProductProps> = ({ products }) => {
  return (
    <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 p-4">
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}
