import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: string[];
};

const initialState: InitialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearItems } = cartSlice.actions;
