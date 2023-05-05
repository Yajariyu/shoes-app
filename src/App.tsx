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
    "fullDescription": "When you can't get away with wearing slippers, wear these instead. The Tech Hera feels like a hug for your feet, with everything from a comfort collar to a lifted midsole for all-day comfort. The suede in the upper gives your look some extra texture, while the wavy design of the midsole keeps it interesting. Its durable design holds up beautifully to everyday wear—which is perfect, because you'll definitely want to wear these every day.",
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
    <div className="flex flex-col md:flex-row justify-center bg-gray-100">
      <div className='w-0 md:w-1/4 bg-green-400'></div>
      <div className='bg-yellow-400 w-full flex justify-center px-2 py-4'>
        <ProductDetail product={mockProduct[0]} />
        {/* <GridProduct products={mockProduct} /> */}
      </div>
    </div>
  )
}

export default App
