import { FC } from 'react'
import { Color } from '../../types/product'
import { Selector, SelectorProductProps } from '../../types/selector'


export const SelectorProduct: FC<SelectorProductProps<Selector>> = ({ collection, handleFunction, prop, selected }) => {
  return (
    <div className="w-full flex flex-row my-4">
      {collection.map((item, index) => (
        <span
          key={index}
          className={`rounded-full 
      ${(prop ? (selected as Color)[prop] === (item as Color)[prop] : selected === item) ? 'bg-purple-600 text-white' : 'bg-white border border-gray-300'}
       px-3 mx-3 cursor-pointer`}
          onClick={() => handleFunction(item)}
        >{prop ? (item as Color)[prop] : item as string}</span>
      ))
      }
    </div >
  )
}
