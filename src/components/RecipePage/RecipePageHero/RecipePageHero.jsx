import { AddButton } from "./button";
import {
  HeroWrapper,
  RecipeTitle,
  RecipeDesc,
  TimeContainer,
  TimerP,
} from "./RecipePage.styled";
import { Clock } from "../../RenderSvg/RenderSvg";

export const RecipePageHero = ({ recipe }) => {
  return (
    <HeroWrapper>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeDesc>{recipe.description}</RecipeDesc>
      <AddButton recipe={recipe} />

      <TimeContainer>
        <Clock />
        <TimerP>{recipe.time} min</TimerP>
      </TimeContainer>
    </HeroWrapper>
  );
};
