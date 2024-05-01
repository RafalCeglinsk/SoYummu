import styled from "styled-components";

export const GalleryUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;

export const GalleryLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 32px;

  align-items: flex-end;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const RecipeImg = styled.img`
  padding-top: 32px;
  width: 100%;
  max-width: 343px;
  height: 323px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform var(--transition-time) var(--cubic);
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    max-width: 366px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 300px;
  }

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const RecipeDescription = styled.div`
  position: absolute;
  top: 80%;
  left: 5%;
  width: 90%;
  height: 60px;
  border-radius: 8px;
  background-color: var(--color-bg-modal);
  transition: transform var(--transition-time) var(--cubic);
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: var(--color-text-3);
    padding: 16px;
    letter-spacing: -0.24px;
  }
`;

export const MainGalleryH2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  color: var(--color-text-1);

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`;

export const ElementWrapper = styled.div`
  position: relative;
  border-radius: 8px;
`;
export const ButtonWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    padding-top: 24px;
  }
`;
