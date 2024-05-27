import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopularRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const PopularRecipeTitle = styled.h2`
  margin-bottom: 15px;
  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around; 
    width: 100%;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    min-width: 700px;
    max-width: 800px;
  }
`;

export const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  width: 100%; 

  @media (min-width: 768px) {
    width: calc(
      50% - 20px
    );
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
`;

export const RecipeImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 8px 0 0 8px;
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
  overflow: hidden;
  flex-grow: 1; 
`;

export const RecipeTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 0 5px 0;
  color: rgba(62, 68, 98, 1);
`;

export const RecipeDescription = styled.p`
  color: rgba(126, 126, 126, 1);
`;
