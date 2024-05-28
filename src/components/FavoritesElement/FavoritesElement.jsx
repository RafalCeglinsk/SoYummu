import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import SearchImg from "../../images/SearchForSomethingElse/kisspng-vegetable-fruit-basket-century-farms-international-fruits-and-vegetables-5abfb9c60122f5 1.png";
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
  PaginationContainer,
  PaginationBtn,
  NoRecipes,
} from "./FavoritesElement.styled.jsx";

export const FavoritesElement = ({
  recipes,
  handleDelete,
  handlePrev,
  handleNext,
  currentPage,
  recipesPerPage,
}) => {
  return (
    <>
      <PageWarpper>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            {" "}
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
      {recipes.length > 0 && (
        <PaginationContainer>
          <PaginationBtn onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </PaginationBtn>

          <PaginationBtn
            onClick={handleNext}
            disabled={recipes.length < recipesPerPage}
          >
            Next
          </PaginationBtn>
        </PaginationContainer>
      )}
      {!recipes.length && (
        <NoRecipes>
          <img src={SearchImg} alt="No searching results vegetable img"></img>
          <p>You don't have any recipes yet!</p>
        </NoRecipes>
      )}
    </>
  );
};
