import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard = ({ count }: { count: number }) => {
  return (
    <>
      {Array(count).fill(0).map((_item, index) => (
        <div className="w-full min-h-[200px] flex flex-col" key={index}>
          <div className='w-full rounded-lg pb-[70%]'>
            <Skeleton height={180} /></div>
          <Skeleton />
          <Skeleton />
        </div>
      ))}

    </>

  )
}

export default SkeletonCard