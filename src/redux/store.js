import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authReducer } from "./auth/authSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { ingredientsReducer } from "./ingredients/ingredientsSlice";
import { addRecipesReducer } from "./recipes/addRecipe/addRecipeSlice.js";
import { favoriteReducer } from "./recipes/favorites/favoriteSlice";
import { mainPageReducer } from "./recipes/main-page/mainPageSlice.js";
import { popularReducer } from "./recipes/popular/popularSlice.js";
import { recipesReducer } from "./recipes/recipes/recipesSlice";
import { shoppingReducer } from "./shoppingList/shoppingListSlice";
import { searchReducer } from "./searchBar/searchBarSlice.js";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
    addRecipes: addRecipesReducer,
    popular: popularReducer,
    search: searchReducer,
    shoppingList: shoppingReducer,
    mainPage: mainPageReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "recipes/updateField",
        ],
        ignoredPaths: ["recipes.recipeData.recipeImg"],
      },
    }),
});

export const persistor = persistStore(store);
