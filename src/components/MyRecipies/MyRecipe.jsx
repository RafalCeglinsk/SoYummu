import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectToken } from "../../redux/auth/selectors.js";
import { selectOwnRecipe } from "../../redux/recipes/recipes/selectors.js";
import {
  deleteRecipe,
  getMyRecipes,
} from "../../redux/recipes/recipes/operations.js";
import { FavoritesElement } from "../FavoritesElement/FavoritesElement.jsx";
import { useState } from "react";

export const MyRecipe = () => {
  const token = useSelector(selectToken);
  const recipes = useSelector(selectOwnRecipe);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    dispatch(getMyRecipes({ token, limit: recipesPerPage, page: currentPage }));
  }, [dispatch, token, currentPage]);

  const handleDelete = (recipeId) => {
    dispatch(deleteRecipe({ token, recipeId }));
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    console.log(currentPage);
  };

  const handleNext = () => {
    if (recipes.length === recipesPerPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={handleNext} disabled={recipes.length < recipesPerPage}>
        Next
      </button>
      <FavoritesElement recipes={recipes} handleDelete={handleDelete} />
    </>
  );
};
