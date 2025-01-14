import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    numOfItems: 0 // Number of items multiplied by their quantity
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
        state.numOfItems += 1;
        console.log(1111,  state.items, state.numOfItems)
    },
    removeItem: (state, action) => {
        const { name, quantity } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
        state.numOfItems -= quantity;
        console.log(2222,  state.items, state.numOfItems)
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            const differenceQuantity = quantity - itemToUpdate.quantity;
            state.numOfItems += differenceQuantity;
            itemToUpdate.quantity = quantity;
        }
        console.log(3333,  state.items, state.numOfItems)
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
