import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayOut;

