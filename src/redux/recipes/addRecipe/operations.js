import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async ({ recipeData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/ownRecipes", recipeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
