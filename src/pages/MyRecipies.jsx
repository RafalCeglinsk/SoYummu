import Footer from "../components/Footer/Footer";
import { MyRecipe } from "../components/MyRecipies/MyRecipe";
import { PageTitle } from "../components/PageTitle/PageTitle";

export const MyRecipePage = () => {
  return (
    <div>
      <PageTitle>My Recipes</PageTitle>
      <MyRecipe />
      <Footer />
    </div>
  );
};
