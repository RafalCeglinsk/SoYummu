import styled from "styled-components";
import recipedesktopBG from "../../../images/RecipePage/recipeDesktopBG.png";
import recipedesktopBG2x from "../../../images/RecipePage/recipeDesktopBG2x.png";
import recipetabletBG from "../../../images/RecipePage/recipeTabletBG.png";
import recipetabletBG2x from "../../../images/RecipePage/recipeTabletBG2x.png";
import recipemobileBG from "../../../images/RecipePage/recipeMobileBG.png";
import recipemobileBG2x from "../../../images/RecipePage/recipeMobileBG2x.png";

export const HeroWrapper = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
gap:18px;
padding-top: 72px;

  background-image: -webkit-image-set(url(${recipemobileBG})),
    -webkit-image-set(url(${recipemobileBG2x}) 2x);
   background-color: var(--color-text-5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


  @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(url(${recipetabletBG})),
      -webkit-image-set(url(${recipetabletBG2x}) 2x);
      gap: 24px;

  }
  @media screen and (min-width: 1440px) {
    background-image: -webkit-image-set(url(${recipedesktopBG})),
      -webkit-image-set(url(${recipedesktopBG2x}) 2x);
      padding-top: 90px;
  }
`;


export const RecipeTitle = styled.h1`
  width: 100%;
  max-width: 300px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--color-text-5);
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1;
    max-width: 500px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 650px;
  }
`;

export const RecipeDesc = styled.div`
  color: var(--color-text-6);
  padding: 0px 2px 0px 2px;
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 650px;
  }
`;
export const Button = styled.button`
  margin-bottom: 22px;
  background-color: transparent;
  border-radius: 15px 35px;
  padding: 10px 18px;
  border: solid var(--color-icons-3) 1px;
  outline: none;
  cursor: pointer;
  color: var(--color-icons-1);
  transition: background-color var(--transition-time) var(--cubic);
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    padding: 18px 44px;
    border: solid var(--color-icons-3) 2px;
  }
  &:hover{
    background-color: var(--color-icons-3);
    color: var(  --color-text-7);
   transform: translateX(1px);
}



`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
`;
export const TimerP = styled.p`
  margin-left: 8px;
  color: var(--color-text-6);
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0px 2px 0px 2px;
`;
