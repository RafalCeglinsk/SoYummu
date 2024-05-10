import styled from "styled-components";

export const Title = styled.div`
margin-bottom: 40px;
padding:0px 16px;
@media screen and (min-width: 768px) {
  padding:0px 32px;
    }
    @media screen and (min-width: 1440px) {
      padding:0px 100px;
    }


  & h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.02em;
text-align: left;
    padding-top: 45px;
    color: var(--color-text-1);
    @media screen and (min-width: 768px) {
      font-size: 32px;
      padding-top: 52px;
      letter-spacing: -0.02em;
    }

    @media screen and (min-width: 1440px) {
      font-size: 44px;
      letter-spacing: -0.88px;
      padding-top: 90px;
    }

  }

  & svg:nth-child(2) {
    rotate: -25deg;
    left: 120px;
    top: 76px;
    position: absolute;
    width: 8px;
    height: 8px;
    @media screen and (min-width: 768px) {
      left: 120px;
      top: 80px;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 1440px) {
      left: 327px;
      top: 116px;
      width: 14px;
      height: 14px;
    }
  }
  & svg:nth-child(3) {
    position: absolute;
    right: 130px;
    top: 142px;
    width: 8px;
    height: 9px;
    @media screen and (min-width: 768px) {
      right: 320px;
      top: 155px;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 1440px) {
      right: 540px;
      top: 200px;
      width: 14px;
      height: 14px;
    }
  }
  & svg:nth-child(4) {
    position: absolute;
    right: 27px;
    top: 108px;
    width: 8px;
    height: 9px;

    @media screen and (min-width: 768px) {
      right: 67px;
      top: 130px;
      width: 12px;
      height: 12px;
    }
    @media screen and (min-width: 1440px) {
      right: 87px;
      top: 130px;
      width: 14px;
      height: 14px;
    }
  }
`;
