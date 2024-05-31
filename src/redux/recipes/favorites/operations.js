import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
  "favorites/get",
  async ({ token, limit = 4, page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get("/favorites", {
        headers: { Authorization: `Bearer ${token}` },
        params: { limit, page },
      });
      const data = response.data;
      const favorites = data.result;
      return favorites;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "favorites/toggle",
  async ({ credentials, token }, thunkAPI) => {
    try {
      const response = await axios.post(`/favorites`, credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
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
      return { data: response.data, _id: recipeId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
