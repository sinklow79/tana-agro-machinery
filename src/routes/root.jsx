import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Main } from "../components/GlobalStyles";

const Root = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Root;
