import FavoriteRecipes from "#components/Favorites/FavoriteRecipies/FavoriteRecipies";
import { PageTitle } from "#components/PageTitle/PageTitle";

function Favorites() {
  return (
    <div>
      <PageTitle>Favorites</PageTitle>
      <FavoriteRecipes />
    </div>
  );
}

export default Favorites;
