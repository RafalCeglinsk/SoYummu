import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
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
