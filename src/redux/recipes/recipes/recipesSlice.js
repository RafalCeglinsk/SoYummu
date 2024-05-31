import { createSlice } from "@reduxjs/toolkit";

import {
  getAllRecipes,
  getRecipeId,
  getMyRecipes,
  deleteRecipe,
} from "./operations";

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
  ownRecipes: [],
  items: null,
  isLoading: false,
  error: null,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeId.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getMyRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes = state.ownRecipes.filter((item) => {
          return item._id !== payload._id;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
