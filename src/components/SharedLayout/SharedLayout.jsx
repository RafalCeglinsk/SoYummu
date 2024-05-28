import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { MainContainer } from "../Footer/Footer.styled";
import { Suspense } from "react";

export const ShareedLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </>
  );
};
