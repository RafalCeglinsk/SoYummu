import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
  "favorites/get",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      const favorites = data.result;
      return favorites;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async ({ credentials, token }, thunkAPI) => {
    console.log(token);
    try {
      const response = await axios.post(`/favorites`, credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async ({ recipeId, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
