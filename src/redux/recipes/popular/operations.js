import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularRecipes = createAsyncThunk(
  "popular/getPopularRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/popular");
      const recipes = response.data.recipes.recipes;
      return recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
