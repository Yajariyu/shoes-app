import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import App from "../App";
import ProductDetailPage from "../views/ProductDetailPage";
import { getProductDB } from "../db/db";
import { useState, useEffect } from 'react';
import { Product } from "../types/product";
import { CustomFallback } from "../components/ui/CustomFallback";


const ProductDetailById = () => {
  const { id } = useParams();
  const { products } = useAppSelector(state => state.products);
  const [productSelected, setProductSelected] = useState<Product>();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async (idProduct: string) => {
      try {
        const result = await getProductDB(idProduct)
        if (result) { setProductSelected(result) }
        else { navigate("/"); }
      } catch (e) {
        navigate("/");
        console.log("error", e)
      }
    }

    if (products.length === 0 && id) {
      fetchProduct(id)
    } else {
      const newProduct = products?.find((product) => product.id === id)
      if (!newProduct) navigate("/");
      setProductSelected(newProduct)
    }
  }, [id, products, navigate])

  if (!productSelected) { return null }
  else {
    return (< ProductDetailPage product={productSelected} />)
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <CustomFallback />
  },
  {
    path: '/:id',
    element: <ProductDetailById />,
    errorElement: <CustomFallback />
  }
]);


export const MyRouter = () =>
  (<RouterProvider router={router} />)