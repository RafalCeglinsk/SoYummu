import { createSlice } from "@reduxjs/toolkit";
import { getMainPageRecipes } from "./operations";

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
  mainPageRecipes: [],
  isLoading: false,
  error: null,
};

const mainRecipesSlice = createSlice({
  name: "mainrecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMainPageRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mainPageRecipes = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

export const mainPageReducer = mainRecipesSlice.reducer;
