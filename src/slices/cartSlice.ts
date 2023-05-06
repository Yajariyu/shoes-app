import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { CartProduct, ProductCart, Selection } from '../types/cart'

// Define a type for the slice state
interface CartState {
  cartProducts: CartProduct[]
  base: number;
  taxes: number
  total: number
}

// Define the initial state using that type
const initialState: CartState = {
  cartProducts: [],
  base: 0,
  taxes: 0,
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCart: (state, action:PayloadAction<ProductCart> ) => {
      const newProductCart: CartProduct = {
        ...action.payload, 
        selection : [{...action.payload.selection} as Selection]
      }

      if(state.cartProducts.length === 0) state.cartProducts = [newProductCart]
      else {
        state.cartProducts = state.cartProducts.map(product => 
          {
            if(product.id === action.payload.id) {
            return {
              ...product, selection: [...product.selection, action.payload.selection],
               quantity: product.quantity+1}
         } else return product
        })
      }

      state.base = state.base + action.payload.price*action.payload.quantity
      state.taxes = state.base*0.15
      state.total = state.base+state.taxes
    },
  },
})

export const { addCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.products

export const cartReducer = cartSlice.reducer
