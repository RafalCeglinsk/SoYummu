import { useDispatch } from "react-redux";
import { SectionWrapper } from "./RecipeIngredients.styled";
import {
  IngredientsListContainer,
  HeadUl,
  IngredientsListUl,
  IngredientsListLi,
} from "./RecipeIngredients.styled";
import { addShopping } from "../../../redux/shoppingList/operations";

export const RecipeIngredientsList = ({ recipe }) => {
  const ingredients = recipe.ingredients;
  const dispatch = useDispatch();
  const handleCheckbox = (ingredient) => {
    const credentials = {
      ingredientId: ingredient._id,
      recipeId: recipe._id,
      measure: ingredient.measure,
    };
    dispatch(addShopping(credentials));
  };
  return (
    <SectionWrapper>
      <HeadUl>
        <li>Ingredients</li>
        <li>Number</li>
        <li>Add to list</li>
      </HeadUl>

      <IngredientsListContainer>
        {ingredients.map((ingredient, id) => (
          <IngredientsListUl key={id}>
            <IngredientsListLi>
              <img src={ingredient.thb} alt={ingredient.ttl} />
              <span>{ingredient.ttl}</span>
              <div>{ingredient.measure}</div>
              <input
                type="checkbox"
                id={`checkbox-${ingredient.ttl}`}
                onChange={() => handleCheckbox(ingredient)}
              />
              <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
