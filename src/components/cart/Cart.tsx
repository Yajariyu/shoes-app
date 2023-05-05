

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
    "color": "green"
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
export const Cart = () => {
  return (
    <div className='bg-white rounded-md px-4 py-2 z-10 absolute left-0 min-w-[80%] min-h-[100%] md:min-h-[500px] md:relative flex flex-col'>
      <h2 className='font-bold'>Order Summary</h2>
      <span className='font-bold absolute right-2 top-1 md:hidden'>X</span>
      <span>Below is a list of your items</span>
      {
        mockCart.map(product => (
          <div className='w-full flex flex-row items-center justify-between my-4' key={`${product.id} + ${product.colorSelected.color}`}>
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
  )
}
