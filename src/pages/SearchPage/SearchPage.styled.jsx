import styled from "styled-components";

const SearchPageStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0px 32px 100px 32px;
  }

  @media (min-width: 1440px) {
    width: 1280px;
  }
`;

const NoResults = styled.div`
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

export { SearchPageStyled, NoResults };
