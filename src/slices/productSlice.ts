import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { Product } from '../types/product'

// Define a type for the slice state
interface ProductState {
  products: Product[]
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProducts: (state, action:PayloadAction<Product[]> ) => {
       state.products =  action.payload
    },
  },
})

export const { addProducts } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.products

export const productReducer = productSlice.reducer

export default productSlice.reducer