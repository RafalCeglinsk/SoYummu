import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MainContainer } from "../components/Footer/Footer.styled";

export const ShareedLayout = () => {
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
