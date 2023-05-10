import { FC, useEffect, useState } from 'react';

import { ProductCard } from './ProductCard'

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { addProducts } from '../../slices/productSlice';
import { getProductsDB } from '../../db/db';
import SkeletonCard from '../ui/SkeletonCard';


export const GridProduct: FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { products } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const results = await getProductsDB();
        if (results.length > 0) {
          dispatch(addProducts(results));
        }
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    if (products.length === 0) getProducts();
  }, [dispatch, products])

  if ((products.length === 0 && !loading) || error) return (
    <>
      <h1 className='text-[26px] font-bold'>No data</h1>
    </>
  )

  return (
    <>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 w-full ">
        {loading && <SkeletonCard count={12} />}
        {!loading && products?.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}
