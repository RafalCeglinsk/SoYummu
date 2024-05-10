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
import { getMyRecipes } from "../../redux/recipes/recipes/operations.js";
import error404 from "../../images/404/error404.jpg";

export const FavoritesElement = ({ recipes, handleDelete }) => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  console.log(recipes);

  useEffect(() => {
    dispatch(getMyRecipes(token));
  }, [dispatch, token]);

  if (recipes.lenght === 0) {
    return <img src={error404} alt="error" />;
  }

  return (
    <>
      {recipes.map((recipe) => (
        <FavRecipeItem>
          <Link to={`/recipes/${recipe._id}`}>
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
          <DeleteButton onClick={() => handleDelete(recipe._id)}></DeleteButton>
          <Link to={`/recipes/${recipe._id}`}>
            <SeeRecipeBtn>See Recipe</SeeRecipeBtn>
          </Link>
        </FavRecipeItem>
      ))}
    </>
  );
};
