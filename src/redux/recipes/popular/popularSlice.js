import { createSlice } from "@reduxjs/toolkit";
import { getPopularRecipes } from "./operations";

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
  items: [],
  isLoading: false,
  error: null,
};

export const popularSlice = createSlice({
  name: "popular",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const popularReducer = popularSlice.reducer;
