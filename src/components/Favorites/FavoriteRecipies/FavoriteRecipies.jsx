import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../redux/auth/selectors";
import { FavoritesElement } from "../../FavoritesElement/FavoritesElement";
import { selectFavorites } from "../../../redux/recipes/favorites/selectors";
import {
  getFavorites,
  removeFavorite,
} from "../../../redux/recipes/favorites/operations";
import { useState } from "react";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    dispatch(getFavorites({ token, limit: recipesPerPage, page: currentPage }));
  }, [token, dispatch, currentPage]);

  const handleDelete = (recipeId) => {
    dispatch(removeFavorite({ token, recipeId }));
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  const handleNext = () => {
    if (favorites.length === recipesPerPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={handleNext} disabled={favorites.length < recipesPerPage}>
        Next
      </button>
      <FavoritesElement recipes={favorites} handleDelete={handleDelete} />;
    </>
  );
};

export default FavoriteRecipes;
