import { useEffect } from 'react'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'


const mockProduct = [

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
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 p-4">
          {mockProduct.map(product => (
            <div className=" rounded-lg shadow-lg flex flex-col justify-center items-center bg-white py-2 px-2 max-w-sm" key={product.id}>
              <img src={product.colors[0].img} alt={product.name} className='w-full rounded-lg' />
              <div className='w-full flex justify-between mt-2'><h4>{product.name}</h4> <span className='font-bold'>${product.price}</span></div>
              <span className='w-full flex flex-start text-[12px]'>{product.colors.length} Colorways</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
