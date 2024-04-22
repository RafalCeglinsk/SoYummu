import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, removeFavorite, toggleFavorite } from "./operations";

const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  isFavorite: false,
  error: null,
  isLoading: false,
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = [...payload.items];
        state.isLoading = false;
      })
      .addCase(toggleFavorite.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isFavorite = payload.isFavorite;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state) => {
        state.error = "someone use old function, fix it!";
      });
  },
});
