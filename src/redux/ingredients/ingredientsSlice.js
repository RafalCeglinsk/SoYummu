import { createSlice } from "@reduxjs/toolkit";
import { getIngredients, getIngredientByName } from "./operations";

const initialState = {
  ingredients: [],
  ingredient: null,
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getIngredientByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredient = action.payload;
      })
      .addCase(getIngredientByName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
