import styled from "styled-components";

export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    padding: 0px 32px;

    }

  @media screen and (min-width: 1440px) {

    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    }

`;

export const RecipeImage = styled.img`
object-fit: cover;
    border-radius: 8px;
    width: 100%;
    max-width: 443px;

    @media screen and (min-width: 768px) {
      width: 433px;
      height: 332px;
    }
`;

export const Placeholder = styled.div`
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
  @media screen and (min-width: 1440px) {

max-width:65%;

}

`;

export const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const StyledLi = styled.li`
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
    padding-left: 50px;
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: -0.2px;
    @media screen and (min-width: 768px) {
      font-size: 18px;

    }

  @media screen and (min-width: 1440px) {
      font-size: 20px;

    }
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
