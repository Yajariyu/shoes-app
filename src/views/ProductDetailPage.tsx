import { FC } from 'react'
import ProductDetail from '../components/products/ProductDetail';
import { Layout } from '../layouts/Layout'
import { Product } from '../types/product';

interface ProductDetailPageProps {
  product: Product
}
const ProductDetailPage: FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  )
}

export default ProductDetailPage