import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectToken } from "../../redux/auth/selectors.js";
import { selectOwnRecipe } from "../../redux/recipes/recipes/selectors.js";
import { getMyRecipes } from "../../redux/recipes/recipes/operations.js";
import { FavoritesElement } from "../FavoritesElement/FavoritesElement.jsx";

export const MyRecipe = () => {
  const token = useSelector(selectToken);
  const recipes = useSelector(selectOwnRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes(token));
  }, [dispatch, token]);

  return <FavoritesElement recipes={recipes} />;
};
