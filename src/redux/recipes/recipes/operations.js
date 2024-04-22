import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes");
      const recipes = response.data;
      console.log(recipes);
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
      console.log("response", response);
      const data = response.data;
      console.log("data", data);
      const recipe = data.recipe;
      console.log("recipe", recipe);
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
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/delete",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
