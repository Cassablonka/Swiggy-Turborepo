import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PropObj = {
  props: Record<string, unknown>;
  quantity: number;
  totalItemsValue: number;
};

type CartItems = {
  [x: string]: unknown;
  items: PropObj[];
  totalCartValue: number;
};

const initialState: CartItems = {
  items: [],
  totalCartValue: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItems>) => {
      const foundIndex = state.items.findIndex(
        (item) => item.props.id === action.payload.id
      );
      if (foundIndex >= 0) {
        state.items[foundIndex].quantity += 1;
      } else {
        state.items.push({
          props: action.payload,
          quantity: 1,
          totalItemsValue: action.payload.price as number,
        });
        state.totalCartValue += action.payload.price as number;
      }
    },
    clearItems: (state) => {
      state.items.length = 0;
      state.totalCartValue = 0;
    },
    increaseItemQuantity: (state, action) => {
      state.totalCartValue += action.payload.price;
      state.items = state.items.map((item) => {
        if (item.props.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalItemsValue:
              item.totalItemsValue + (item.props.price as number),
          };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.totalCartValue -= action.payload.price;
      const foundIndex = state.items.findIndex(
        (item) => item.props.id === action.payload.id
      );
      if (foundIndex >= 0) {
        if (state.items[foundIndex].quantity === 1) {
          state.items[foundIndex].totalItemsValue -= state.items[foundIndex]
            .props.price as number;
          state.items.splice(foundIndex, 1);
        } else {
          state.items[foundIndex].totalItemsValue -= state.items[foundIndex]
            .props.price as number;
          state.items[foundIndex].quantity -= 1;
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  clearItems,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
