import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async (recipeData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/recipes", recipeData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
