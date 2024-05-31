import { Link } from "react-router-dom";

import SearchBar from "#components/SearchPage/SearchBar/SearchBar";
import { MainPage } from "#components/MainPageHero/MainPage";
import { MainGallery } from "#components/MainPageHero/PreviewCategories/MainGallery";
import { MainContainer } from "#components/Footer/Footer.styled";
import { CurvedButtonMain } from "#components/Buttons/CurvedButton";
import { MainWrapper } from "#components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "#components/MainPageHero/MainPage.styled";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <MainPage />
          <SbMobileStyle>
            <SearchBar showSearchContainer={false} />
          </SbMobileStyle>
          <MainGallery />
          <Link to="/categories/">
            <CurvedButtonMain text="Other categories" />
          </Link>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Main;
