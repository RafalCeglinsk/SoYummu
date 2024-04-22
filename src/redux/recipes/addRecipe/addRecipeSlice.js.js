import { createSlice } from "@reduxjs/toolkit";
import { addRecipeThunk } from "./actions";
import { getCategories } from "../../categories/operations";

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
  categories: [],
  recipes: [],
  recipeData: {
    recipeImg: null,
    title: "",
    category: "",
    description: "",
    time: "",
    ingredients: [],
    instructions: "",
  },
  status: "idle",
  error: null,
};

const addRecipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    updateField(state, action) {
      const { name, value } = action.payload;
      if (!state.recipeData) {
        state.recipeData = {};
      }
      state.recipeData[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(addRecipeThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes.push(action.payload);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const { updateField } = addRecipesSlice.actions;

export const addRecipesReducer = addRecipesSlice.reducer;
