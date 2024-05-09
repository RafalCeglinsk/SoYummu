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
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/favorites/`, credentials);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/remove",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
