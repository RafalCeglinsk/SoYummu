import { useDispatch, useSelector } from "react-redux";

import { SectionWrapper } from "./RecipeIngredients.styled";
import { addShopping } from "#redux/shoppingList/operations";
import { selectToken } from "#redux/auth/selectors";
import {
  IngredientsListContainer,
  HeadUl,
  IngredientsListUl,
  IngredientsListLi,
  IngredientWrapper,
  CheckBoxWrapper,
  Measure,
} from "./RecipeIngredients.styled";

export const RecipeIngredientsList = ({ recipe }) => {
  const ingredients = recipe.ingredients;
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const handleCheckbox = (ingredient) => {
    const credentials = {
      ingredientId: ingredient._id,
      recipeId: recipe._id,
      measure: ingredient.measure,
    };
    dispatch(addShopping({ credentials, token }));
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
              <IngredientWrapper>
                <img src={ingredient.thb} alt={ingredient.ttl} />
                <span>{ingredient.ttl}</span>
              </IngredientWrapper>

              <Measure>{ingredient.measure}</Measure>
              <CheckBoxWrapper>
                <input
                  type="checkbox"
                  id={`checkbox-${ingredient.ttl}`}
                  onChange={() => handleCheckbox(ingredient)}
                />
                <label htmlFor={`checkbox-${ingredient.ttl}`}></label>
              </CheckBoxWrapper>
            </IngredientsListLi>
          </IngredientsListUl>
        ))}
      </IngredientsListContainer>
    </SectionWrapper>
  );
};
