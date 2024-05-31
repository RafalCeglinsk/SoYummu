import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const NotFoundImage = styled.img`
  width: 258px;
  height: auto;
  padding: 164px 58px 178px 58px;
  margin-bottom: 32px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    width: 498px;
  }
`;

export const NotFoundParagraph = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const NotFoundSpan = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: -0.02em;
  color: var(--color-text-2);
  margin-bottom: 100px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
