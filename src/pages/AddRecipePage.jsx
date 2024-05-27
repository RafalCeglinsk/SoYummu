import React from "react";
import AddRecipeForm from "../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import { PageTitle } from "../components/PageTitle/PageTitle";

const AddRecipePage = () => {
  return (
    <div>
      <PageTitle>Add Recipe</PageTitle>
      <AddRecipeForm/>
    </div>
  );
};

export default AddRecipePage;
