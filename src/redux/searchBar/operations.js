import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const performSearch = createAsyncThunk(
  "search/performSearch",
  async ({ query, type }, thunkAPI) => {
    try {
      let response;
      if (type === "title") {
        response = await axios.get(`/recipes/search?title=${query}`);
      } else if (type === "ingredients") {
        response = await axios.get(`/ingredients?ingredients=${query}`);
      }
      const data = response.data;
      const result = data.result;
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
