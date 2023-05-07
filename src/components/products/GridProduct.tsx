import { FC, useEffect, useState } from 'react';

import { ProductCard } from './ProductCard'

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addProducts } from '../../slices/productSlice';
import { getProductsDB } from '../../db/db';



export const GridProduct: FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { products } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const products = await getProductsDB();
        dispatch(addProducts(products))
      } catch (e) {
        setLoading(false)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getProducts();
  }, [dispatch])

  if (products.length === 0 && error && !loading) return (
    <>
      <h1>No data</h1>
    </>
  )
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
