import { SelectorProduct } from "./SelectorProduct"
import { FC } from 'react';
import { SelectorProductProps, Selector } from '../../types/selector';

interface SelectionComponentProps extends SelectorProductProps<Selector> {
  label: string
}
export const SelectionComponent: FC<SelectionComponentProps> = ({ label, collection, handleFunction, selected, prop }) => {
  return (
    <div className='my-2'>
      <h3 className=''>{label}</h3>
      <div className="w-full flex flex-row my-4">
        <SelectorProduct
          collection={collection}
          handleFunction={handleFunction}
          selected={selected}
          prop={prop}
        />
      </div>
    </div>
  )
}

