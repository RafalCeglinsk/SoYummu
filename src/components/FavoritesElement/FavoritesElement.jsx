import { Link } from "react-router-dom";
import {
  FavRecipeItem,
  RecipeImageThumb,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  SeeRecipeBtn,
  FavRecipeTopInfo,
} from "./MyRecipe.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectToken } from "../../redux/auth/selectors.js";
import {
  deleteRecipe,
  getMyRecipes,
} from "../../redux/recipes/recipes/operations.js";

export const FavoritesElement = ({ recipes }) => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyRecipes(token));
  }, [dispatch, token]);

  const onDelete = (id) => {
    dispatch(deleteRecipe(id, token));
  };

  if (!recipes) {
    return null;
  }
  return (
    <>
      {recipes.map((recipe) => (
        <FavRecipeItem>
          <Link to={`/recipe/${recipe._id}`}>
            <RecipeImageThumb>
              <RecipeImage src={recipe.thumb} alt={recipe.title} />
            </RecipeImageThumb>
          </Link>
          <FavRecipeTopInfo>
            <div>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeDescription>{recipe.description}</RecipeDescription>
            </div>
            <RecipePrepTime>{recipe.time}</RecipePrepTime>
          </FavRecipeTopInfo>
          <DeleteButton onClick={() => onDelete(recipe._id)}></DeleteButton>
          <Link to={`/recipes/${recipe._id}`}>
            <SeeRecipeBtn>See Recipe</SeeRecipeBtn>
          </Link>
        </FavRecipeItem>
      ))}
    </>
  );
};
