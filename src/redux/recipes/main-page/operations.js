import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMainPageRecipes = createAsyncThunk(
  "recipes/getMainPageRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/main-page");
      const object = response.data.recipesMainPage;
      const objectArr = Object.values(object);
      return objectArr;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
