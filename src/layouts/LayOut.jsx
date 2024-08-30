import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOut;

