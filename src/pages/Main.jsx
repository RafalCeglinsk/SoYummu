import { Link } from "react-router-dom";
import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchPage/SearchBar/SearchBar";
import { MainGallery } from "../components/MainPageHero/PreviewCategories/MainGallery";
import { MainContainer } from "../components/Footer/Footer.styled";
// import Footer from "../components/footer/footer";
import { CurvedButtonMain } from "../components/Buttons/CurvedButton";

import { MainWrapper } from "../components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "../components/MainPageHero/MainPage.styled";

import Footer from "../components/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default Main;
