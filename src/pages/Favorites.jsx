import FavoriteRecipes from "../components/Favorites/FavoriteRecipies/FavoriteRecipies";
import Footer from "../components/Footer/Footer";
import { PageTitle } from "../components/PageTitle/PageTitle";
function Favorites() {
  return (
    <div>
      <PageTitle>Favorites</PageTitle>
      <FavoriteRecipes />
      <Footer />
    </div>
  );
}

export default Favorites;
