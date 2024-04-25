import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    increment: (state) => {
      // console.log("increment");
      state.value += 1
    },
  }
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer