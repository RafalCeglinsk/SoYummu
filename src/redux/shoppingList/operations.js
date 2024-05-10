import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const deleteShopping = createAsyncThunk(
  "shopping/delete",
  async ({ id, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`/shopping-lists/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
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
  async ({ credentials, token }, thunkAPI) => {
    try {
      const result = await axios.post("/shopping-lists", credentials, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(result);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectedWithValue(error.message);
    }
  }
);
