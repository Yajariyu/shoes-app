import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { CartProduct, ProductCart } from '../types/cart'

// Define a type for the slice state
interface CartState {
  cartProducts: CartProduct[]
  base: number;
  taxes: number
  total: number;
  open: boolean
}

// Define the initial state using that type
const initialState: CartState = {
  cartProducts: [],
  base: 0,
  taxes: 0,
  total: 0,
  open: false
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCart: (state, action:PayloadAction<ProductCart> ) => {
      const { id, price, quantity, selection } = action.payload;
      const existingProductIndex = state.cartProducts.findIndex((product) => product.id === id);
    
      if (existingProductIndex > -1) {
        state.cartProducts[existingProductIndex].quantity += 1;
        state.cartProducts[existingProductIndex].selection.push({ ...selection });
      } else {
        state.cartProducts.push({
          ...action.payload,
          selection: [{ ...selection }],
          quantity: 1
        });
      }
    
      state.base += price * quantity;
      state.taxes = state.base * 0.15;
      state.total = state.base + state.taxes;
    },
    removeCart:(state, action:PayloadAction<string> ) => {
      state.cartProducts = state.cartProducts.filter(product=>product.id!==action.payload)
      state.base = state.cartProducts.reduce((acum, product)=> (acum+(product.price*product.quantity)),0)
      state.taxes = state.base*0.15
      state.total = state.base+state.taxes
    },
    deleteCart: (state => {
      state.cartProducts = []
    }),
    setoggleCart:(state, action:PayloadAction<boolean>) => {
      state.open =action.payload
    }
  },

})

export const { addCart, setoggleCart , removeCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.products

export const cartReducer = cartSlice.reducer
