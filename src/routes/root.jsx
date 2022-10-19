import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Main } from "../components/GlobalStyles";

const Root = () => {
  return (
    <div>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default Root;
