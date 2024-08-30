import React from "react";
import Router from "./shared/Router";
import { AggrogramProvider } from "./context/AggrogramContext.jsx";

function App() {
  return (
    <>
      <AggrogramProvider>
        <Router />
      </AggrogramProvider>
    </>
  );
}

export default App;
