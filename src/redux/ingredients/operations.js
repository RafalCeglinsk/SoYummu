import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getIngredients = createAsyncThunk(
  "ingredients/getIngredients",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/ingredients/list");
      return response.data.result.map((ingredient) => ({
        value: ingredient._id,
        label: ingredient.ttl,
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredientByName = createAsyncThunk(
  "ingredients/getIngredientByName",
  async (ingredientName, thunkAPI) => {
    try {
      const response = await axios.get(
        `/ingredients?ingredients=${ingredientName}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
