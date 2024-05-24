import React from "react";
import { FavoritesElement } from "../../FavoritesElement/FavoritesElement";
import { selectFavorites } from "../../../redux/recipes/favorites/selectors";
import {
  getFavorites,
  removeFavorite,
} from "../../../redux/recipes/favorites/operations";
import { useRecipePagination } from "../../../hooks/useRecipePagination";

const FavoriteRecipes = () => {
  const {
    recipes: favorites,
    handleDelete,
    handlePrev,
    handleNext,
    currentPage,
    recipesPerPage,
  } = useRecipePagination(getFavorites, removeFavorite, selectFavorites);

  return (
    <>
      <FavoritesElement
        recipes={favorites}
        handleDelete={handleDelete}
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentPage={currentPage}
        recipesPerPage={recipesPerPage}
      />
    </>
  );
};

export default FavoriteRecipes;
