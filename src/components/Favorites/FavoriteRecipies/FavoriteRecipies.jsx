import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../redux/auth/selectors";
import { FavoritesElement } from "../../FavoritesElement/FavoritesElement";
import { selectFavorites } from "../../../redux/recipes/favorites/selectors";
import { getFavorites } from "../../../redux/recipes/favorites/operations";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getFavorites(token));
  }, [token, dispatch]);

  return <FavoritesElement recipes={favorites} />;
};

export default FavoriteRecipes;
