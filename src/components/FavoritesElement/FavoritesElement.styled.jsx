import styled from "styled-components";

export const PageWarpper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 40px 16px;
  @media (min-width: 768px) {
    padding: 40px 32px;
    gap: 40px;
  }
  @media (min-width: 1280px) {
    padding: 50px 100px;
    gap: 50px;
  }
`;

export const FavRecipeItem = styled.li`
  background-color: var(--color-bg-modal);
  position: relative;
  display: flex;
  padding: 14px 9px;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 28px;
  }
  @media (min-width: 1280px) {
    padding: 40px;
  }
`;
export const RecipeImageThumb = styled.div`
  width: 124px;
  height: 124px;
  margin-right: 14px;
  overflow: hidden;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 228px;
    height: 232px;
    margin-right: 24px;
  }
  @media (min-width: 1280px) {
    width: 318px;
    height: 324px;
    margin-right: 40px;
  }
`;
export const RecipeImage = styled.img`
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const RecipeTitle = styled.h3`
  width: 80%;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 34px;
  }
`;
export const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  max-width: 80%;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const RecipePrepTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const DeleteButton = styled.button`
  position: absolute;
  cursor: pointer;
  padding: 5px;
  top: 14px;
  right: 9px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
  background-color: var(--color-icons-3);
  &:hover {
    background-color: var(--color-text-1);
  }
  svg {
    stroke: #fafafa;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    top: 28px;
    right: 24px;
    padding: 8px;
    width: 38px;
    height: 38px;
  }
  @media (min-width: 1280px) {
    top: 40px;
    right: 40px;
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;
export const SeeRecipeBtn = styled.button`
  position: absolute;
  right: 9px;
  bottom: 14px;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  font-size: 10px;
  line-height: 1.5;
  width: 87px;
  height: 27px;
  color: #fafafa;
  transition: background-color 0.2s ease-in-out;
  background-color: #8baa36;
  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
  @media (min-width: 768px) {
    right: 24px;
    bottom: 28px;
    width: 138px;
    height: 45px;
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    bottom: 40px;
    right: 40px;
    width: 160px;
    height: 54px;
  }
`;
export const FavRecipeTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 20px;
`;

export const PaginationBtn = styled.button`
  width: 54px;
  height: 54px;
  color: #fafafa;
  background-color: var(--color-icons-3);
  border-radius: 50px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
`;

export const NoRecipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  max-width: 400px;
  color: var(--color-text-1);
  gap: 16px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media (min-width: 768px) {
    padding-bottom: 200px;
  }
`;
