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

export const FavoritesElement = ({ recipes, handleDelete }) => {
  return (
    <>
      <PageWarpper>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            {" "}
            {/* Wrap the elements with a parent div */}
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
          </div>
        ))}
      </PageWarpper>
    </>
  );
};
