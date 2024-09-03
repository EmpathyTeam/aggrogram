import { AggrogramProvider } from "./contexts/AggrogramContext.jsx";
import React from "react";
import Router from "./shared/Router";

function App() {
  console.log("test");
  return (
    <>
      <AggrogramProvider>
        <Router />
      </AggrogramProvider>
    </>
  );
}

export default App;
