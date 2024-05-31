import React from "react";
import { Link } from "react-router-dom";

import NoImage from "#images/NoImage/NoImageSmall.png";
import { getRecipesLimit } from "#hooks/useWidth";
import {
  GalleryLi,
  ElementWrapper,
  RecipeImg,
  RecipeDescription,
} from "./MainGallery.styled";

export const PreviewCategories = ({ categoryRecipes, viewMode }) => {
  const renderRecipes = (recipes, limit) => {
    return recipes.slice(0, limit).map((recipe, _id) => (
      <Link to={`/recipes/${recipe._id}`} key={_id}>
        <ElementWrapper>
          <RecipeImg
            src={recipe.thumb ? recipe.thumb : NoImage}
            loading="lazy"
            alt={recipe.title}
          />
          <RecipeDescription>
            <p>{recipe.title}</p>
          </RecipeDescription>
        </ElementWrapper>
      </Link>
    ));
  };

  return (
    <GalleryLi>
      {renderRecipes(
        categoryRecipes,
        getRecipesLimit(viewMode, categoryRecipes)
      )}
    </GalleryLi>
  );
};
