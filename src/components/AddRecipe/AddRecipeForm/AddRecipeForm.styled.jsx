import styled from "styled-components";

export const Container = styled.div`
  margin: 0px 16px;
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    margin: 0px 32px;
    padding-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 50px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  width: 40vw;
  background-color: var(--color-bg-footer);
  color: white;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 10vw;
  }

  &:hover {
    background-color: #8baa36;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #004494;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Right = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 50px;
  }
`;

export const StyledH2 = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const FollowUs = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
