import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import cartReducer from './slices/cart.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  
  },
})