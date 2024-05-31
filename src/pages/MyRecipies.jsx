import { MyRecipe } from "#components/MyRecipies/MyRecipe";
import { PageTitle } from "#components/PageTitle/PageTitle";

const MyRecipePage = () => {
  return (
    <div>
      <PageTitle>My Recipes</PageTitle>
      <MyRecipe />
    </div>
  );
};

export default MyRecipePage;
