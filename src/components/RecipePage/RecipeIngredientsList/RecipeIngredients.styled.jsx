import styled from "styled-components";

export const SectionWrapper = styled.div`
  padding: 32px 16px;
  @media screen and (min-width: 768px) {
    padding: 50px 32px;
  }
`;

export const HeadUl = styled.ul`
  padding: 12px 14px;
  border-radius: 8px;
  background-color: var(--color-icons-3);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  list-style-type: none;
  color: var(--color-text-7);
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 21px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
    font-size:24px;
  }
  & li:nth-child(1) {
    width: 50%;
  }
`;

export const IngredientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  gap: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;
export const IngredientsListUl = styled.ul`
  border-radius: 8px;
  background-color: var(--color-ingredient-bg);
`;

export const IngredientsListLi = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;

  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 1px 32px;
  }
  & img {
    width: 65px;
    height: 65px;
    @media screen and (min-width: 768px) {
      width: 144px;
      height: 146px;
    }
    @media screen and (min-width: 1440px) {
      width: 180px;
      height: 180px;
    }
  }
  & span {
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: -0.24px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  label:before {
    content: "";

    display: flex;
    width: 18px;
    height: 18px;
    border: 2px solid var(--checkbox-color);
    border-radius: 4px;
    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  input[type="checkbox"]:checked + label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 7px;
    width: 6px;
    height: 12px;
    border: 1px solid var(--color-icons-3);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);

    @media screen and (min-width: 768px) {
      width: 12px;
      height: 25px;
      top: 3%;
      left: 20%;
    }
    @media screen and (min-width: 1440px) {
      right: 5.5%;
      top: 5%;
    }
  }
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
  position: relative;
  padding-right: 20px;
`;

export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2vw;
  width: 50%;
`;
export const Measure = styled.span`
  padding: 4px ;
  background-color: var(--color-text-5);
  border-radius: 4px;
  color: var(--color-text-7);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 4px 8px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
