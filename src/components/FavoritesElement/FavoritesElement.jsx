import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import {
  PageWarpper,
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

  useEffect(() => {
    dispatch(getMyRecipes(token));
  }, [dispatch, token]);

  if (recipes.lenght === 0) {
    return <img src={error404} alt="error" />;
  }

  return (
    <PageWarpper>
      {recipes.map((recipe) => (
        <FavRecipeItem key={recipe._id}>
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
            <RecipePrepTime>
              <FaRegClock />
              {recipe.time} min
            </RecipePrepTime>
          </FavRecipeTopInfo>
          <DeleteButton onClick={() => handleDelete(recipe._id)}>
            <IoTrashOutline />
          </DeleteButton>
          <Link to={`/recipes/${recipe._id}`}>
            <SeeRecipeBtn>See Recipe</SeeRecipeBtn>
          </Link>
        </FavRecipeItem>
      ))}
    </PageWarpper>
  );
};
