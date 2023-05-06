import { ratingData } from '../../mockData/ratingData'
import { AiFillStar, AiOutlineUser } from 'react-icons/ai'

export const Rating = () => {
  return (
    <div className='py-4 '>
      <h3 className='font-bold'>Ratings</h3>
      <p className='mb-2'>Read the rating for this product below</p>
      {
        ratingData.map(rating => (
          <div className='border border-gray-400 rounded-md py-2 px-2 relative my-2' key={rating.id}>
            <div className='absolute right-1 top-1 text-purple-700 flex items-center'>
              <span className='font-bold text-black'>{rating.rating} </span><AiFillStar />
            </div>
            <div className='text-purple-600 flex items-center'><AiOutlineUser /><span className='mx-2'>{rating.user}</span>

            </div>
            <p>{rating.description}</p>
          </div>
        ))
      }
    </div >
  )
}
