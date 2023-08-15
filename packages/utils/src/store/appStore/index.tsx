import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
