import { useRecipePagination } from "../../hooks/useRecipePagination";
import {
  deleteRecipe,
  getMyRecipes,
} from "../../redux/recipes/recipes/operations";
import { selectOwnRecipe } from "../../redux/recipes/recipes/selectors";
import { FavoritesElement } from "../FavoritesElement/FavoritesElement";

export const MyRecipe = () => {
  const {
    recipes,
    handleDelete,
    handlePrev,
    handleNext,
    currentPage,
    recipesPerPage,
  } = useRecipePagination(getMyRecipes, deleteRecipe, selectOwnRecipe);

  return (
    <>
      <FavoritesElement
        recipes={recipes}
        handleDelete={handleDelete}
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentPage={currentPage}
        recipesPerPage={recipesPerPage}
      />
    </>
  );
};
