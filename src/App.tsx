import { useEffect } from 'react'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { GridProduct } from './components/products/GridProduct'
import ProductDetail from './components/products/ProductDetail'


const mockProduct = [

  {
    "colors": [
      {
        "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683240401/tech-hera-womens-shoes-NjvkxR-pink_ofxn2i.jpg",
        "color": "pink"
      },
      {
        "color": "green",
        "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683245323/tech-hera-womens-shoes-NjvkxR-green_sxiwqe.jpg"
      }
    ],
    "price": 110,
    "name": "Nike Tech Hera",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Member Exclusive: Free Expedited shipping on orders $150+. Log in or sign up for free to save.",
    "fullDescription": "When you can't get away with wearing slippers, wear these instead. The Tech Hera feels like a hug for your feet, with everything from a comfort collar to a lift ",
    "id": "C86X1Gijk4cvKHDbd3hm"
  },
  {
    "colors": [
      {
        "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683240401/tech-hera-womens-shoes-NjvkxR-pink_ofxn2i.jpg",
        "color": "pink"
      },
      {
        "color": "white",
        "img": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a917b369-a445-4ecc-8bef-a9c6f1b7e90a/tech-hera-womens-shoes-NjvkxR.png"
      }
    ],
    "price": 110,
    "name": "Nike Tech Hera",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Member Exclusive: Free Expedited shipping on orders $150+. Log in or sign up for free to save.",
    "id": "C86X1Gijk4cvKHDbd3hm1"
  },
  {
    "colors": [
      {
        "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683240401/tech-hera-womens-shoes-NjvkxR-pink_ofxn2i.jpg",
        "color": "pink"
      },
      {
        "color": "white",
        "img": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a917b369-a445-4ecc-8bef-a9c6f1b7e90a/tech-hera-womens-shoes-NjvkxR.png"
      }
    ],
    "price": 110,
    "name": "Nike Tech Hera",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Member Exclusive: Free Expedited shipping on orders $150+. Log in or sign up for free to save.",
    "id": "C86X1Gijk4cvKHDbd3hm2"
  }
]

const mockCart = [{
  "colorSelected":
  {
    "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683240401/tech-hera-womens-shoes-NjvkxR-pink_ofxn2i.jpg",
    "color": "pink"
  },
  "price": 110,
  "name": "Nike Tech Hera",
  "size":
    "6",
  "description": "Member Exclusive: Free Expedited shipping on orders $150+. Log in or sign up for free to save.",
  "fullDescription": "When you can't get away with wearing slippers, wear these instead. The Tech Hera feels like a hug for your feet, with everything from a comfort collar to a lift ",
  "id": "C86X1Gijk4cvKHDbd3hm",
  "quantity": 1
}, {
  "colorSelected":
  {
    "img": "https://res.cloudinary.com/dz6a6utrx/image/upload/v1683240401/tech-hera-womens-shoes-NjvkxR-pink_ofxn2i.jpg",
    "color": "pink"
  },
  "price": 110,
  "name": "Nike Tech Hera",
  "size":
    "6",
  "description": "Member Exclusive: Free Expedited shipping on orders $150+. Log in or sign up for free to save.",
  "fullDescription": "When you can't get away with wearing slippers, wear these instead. The Tech Hera feels like a hug for your feet, with everything from a comfort collar to a lift ",
  "id": "C86X1Gijk4cvKHDbd3hm",
  "quantity": 1
}]
function App() {

  // const productsCollection = collection(db, 'products')
  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const products = await getDocs(productsCollection)
  //       console.log(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   getProducts()
  // }, [])



  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 h-full md:min-h-screen">
      <div className='w-0 md:w-[35%] bg-green-400 px-2 py-4'>
        <div className='bg-white rounded-md px-4 py-2 z-10 absolute left-0 min-w-[80%] min-h-[100%] md:min-h-[500px] md:relative flex flex-col'>
          <h2 className='font-bold'>Order Summary</h2>
          <span className='font-bold absolute right-2 top-1 md:hidden'>X</span>
          <span>Below is a list of your items</span>
          {
            mockCart.map(product => (
              <div className='w-full flex flex-row items-center justify-between my-4'>
                <div className="flex">
                  <img src={product.colorSelected?.img} alt={product.name} className='rounded-md w-[70px]' />
                  <div className='flex flex-col ml-1'>
                    <span className='w-full'>{product.name}</span>
                    <span className='text-[12px]'>Quantity : {product.quantity}</span>
                  </div>
                </div>
                <div className='font-bold'>${product.price.toFixed(2)}</div>
              </div>
            ))
          }
          <hr />
          <div className='flex flex-col justify-between h-full grow py-8'>
            <div className='mt-4 min-h-full grow'>
              <h3>Price Breakdown</h3>
              <div className='flex flex-col'>
                <span className='flex justify-between'>Base Price <span>$156.00</span></span>
                <span className='flex justify-between'>Taxes</span>
                <span className='flex justify-between'>Shipping Fee</span>
                <span className='flex justify-between mt-2'>Total:</span>
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <button>Cancel</button>
              <button>Continue</button>
            </div>
          </div>

        </div>
      </div>
      <div className='bg-yellow-400 w-full flex justify-center px-2 py-4'>
        <ProductDetail product={mockProduct[0]} />
        {/* <GridProduct products={mockProduct} /> */}
        <div className='bg-gray-200 rounded-md min-w-[65%] py-3 px-4 fixed bottom-2 hidden md:block'>
          <button className='bg-purple-600 rounded-full px-2 py-2 text-white'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default App
