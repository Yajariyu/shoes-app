import { FC, useEffect } from 'react';

import { ProductCard } from './ProductCard'

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addProducts } from '../../slices/productSlice';
import { getProductsDB } from '../../db/db';



export const GridProduct: FC = () => {
  const { products } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getProductsDB();
        dispatch(addProducts(products))
      } catch (e) {
        console.log(e)
      }
    }
    getProducts()
  }, [dispatch])

  return (
    <>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}
