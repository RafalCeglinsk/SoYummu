import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const deleteShopping = createAsyncThunk(
  "shopping/delete",
  async (id) => {
    try {
      const response = await axios.delete(`/shopping-lists/${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

export const getShopping = createAsyncThunk(
  "shopping/get",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/shopping-lists", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      const items = data.shoppingList;
      return items;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addShopping = createAsyncThunk(
  "addShopping/post",
  async (credentials) => {
    try {
      const result = await axios.post("/shopping-lists", credentials);
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
