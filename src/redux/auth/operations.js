import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);
      return response.data.ResponseBody;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure("User already registered");
        return thunkAPI.rejectWithValue("User already registered");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);
      const responseBody = response.data.RequestBody;
      const user = responseBody.user;
      const token = responseBody["Current token"];
      setAuthHeader(token);
      return { user, token };
    } catch (error) {
      Notiflix.Notify.failure("Invalid email or password");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
    Notiflix.Notify.success("Logged out successfully");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/auth/current");
      return response.data.ResponseBody;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
