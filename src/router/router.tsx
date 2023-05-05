import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import App from "../App";
import ProductDetailPage from "../views/ProductDetailPage";


const ProductDetailById = () => {
  const { id } = useParams();
  console.log(id)
  const { products } = useAppSelector(state => state.products);
  if (!products) {
    console.log("ask products")
  }
  const productSelected = products.find((product) => product.id === id)
  if (!productSelected) return (<></>)
  return (< ProductDetailPage product={productSelected} />)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/:id',
    element: <ProductDetailById />
  }
]);


export const MyRouter = () =>
  (<RouterProvider router={router} />)