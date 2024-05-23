import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/auth/selectors";

export const useRecipePagination = (
  getRecipesAction,
  deleteRecipeAction,
  selectRecipes
) => {
  const token = useSelector(selectToken);
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    dispatch(
      getRecipesAction({ token, limit: recipesPerPage, page: currentPage })
    );
  }, [dispatch, token, currentPage, getRecipesAction]);

  const handleDelete = (recipeId) => {
    dispatch(deleteRecipeAction({ token, recipeId }));
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (recipes.length === recipesPerPage) setCurrentPage(currentPage + 1);
  };

  return {
    recipes,
    handleDelete,
    handlePrev,
    handleNext,
    currentPage,
    recipesPerPage,
  };
};
