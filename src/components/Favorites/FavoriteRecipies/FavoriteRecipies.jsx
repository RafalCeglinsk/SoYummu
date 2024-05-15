import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../redux/auth/selectors";
import { FavoritesElement } from "../../FavoritesElement/FavoritesElement";
import { selectFavorites } from "../../../redux/recipes/favorites/selectors";
import {
  getFavorites,
  removeFavorite,
} from "../../../redux/recipes/favorites/operations";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  useEffect(() => {
    dispatch(getFavorites(token));
  }, [token, dispatch]);

  const handleDelete = (recipeId) => {
    dispatch(removeFavorite({ token, recipeId }));
  };

  return <FavoritesElement recipes={favorites} handleDelete={handleDelete} />;
};

export default FavoriteRecipes;
