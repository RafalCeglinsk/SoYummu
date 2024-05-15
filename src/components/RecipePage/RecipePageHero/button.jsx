import { Button } from "./RecipePage.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsFavorite } from "../../../redux/recipes/favorites/selectors";
import {
  removeFavorite,
  toggleFavorite,
} from "../../../redux/recipes/favorites/operations";
import { selectToken } from "../../../redux/auth/selectors";

export const AddButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isFavorite = useSelector((state) =>
    selectIsFavorite(state, recipe._id)
  );

  const handleClick = () => {
    const recipeId = recipe._id;
    const credentials = {
      recipeId: recipe._id,
    };
    if (isFavorite) {
      dispatch(removeFavorite({ recipeId, token }));
    } else {
      dispatch(toggleFavorite({ credentials, token }));
    }
  };

  return (
    <Button onClick={handleClick}>
      <span>{isFavorite ? "Remove from favorite" : "Add to favorite"}</span>
    </Button>
  );
};
