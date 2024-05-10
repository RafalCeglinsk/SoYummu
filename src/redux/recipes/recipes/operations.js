import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes");
      const recipes = response.data;
      return recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipeId = createAsyncThunk(
  "recipes/getRecipeId",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/${id}`);
      const data = response.data;
      const recipe = data.recipe;
      return recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMyRecipes = createAsyncThunk(
  "recipes/getMyRecipes",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get("/ownRecipes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      const result = data.result;
      return result;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/delete",
  async ({ recipeId, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`/ownRecipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
