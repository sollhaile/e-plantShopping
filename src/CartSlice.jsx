import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Filter out the item to remove from the cart based on name or ID
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Find the item and update its quantity
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
