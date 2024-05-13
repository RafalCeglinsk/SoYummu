import { createSlice } from "@reduxjs/toolkit";
import { deleteShopping, getShopping, addShopping } from "./operations";

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShopping.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shoppingList = action.payload;
      })
      .addCase(addShopping.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shoppingList.push(action.payload);
      })
      .addCase(deleteShopping.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shoppingList = state.shoppingList.filter(
          (item) => item.ingredientId._id !== action.payload.id
        );
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const shoppingReducer = shoppingSlice.reducer;
