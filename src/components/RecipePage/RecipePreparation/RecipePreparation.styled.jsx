import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ddd;
  border-radius: 10px;
  font-size: 16px;
  color: #999;
`;

export const Description = styled.div`
  margin-bottom: 40px;
`;

export const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const StyledLi = styled.li`
  display: flex;
  list-style-type: none;
  position: relative;
  @media screen and (min-width: 1440px) {
    max-width: 50%;
  }

  &::before {
    content: counter(step-counter);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-text-5);
    color: white;
    font-size: 12px;
    line-height: 1.5px;
    font-weight: 600;
  }
  & > p {
    padding-left: 51px;
    font-size: 20px;
    line-height: 1.16;
    letter-spacing: -0.2px;
  }
`;

export const PreparationHeader = styled.h2`
  padding-bottom: 28px;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--color-text-2);
`;

export const StyledListContainer = styled.div`
  counter-increment: step-counter;
`;
