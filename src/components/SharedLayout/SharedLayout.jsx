import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainContainer } from "../Footer/Footer.styled";

const ShareedLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default ShareedLayout;
