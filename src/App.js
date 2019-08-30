import React from "react";
import { render } from "react-dom";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <>
      <h1>Pet society</h1>
      <SearchParams />
    </>
  );
};

render(<App />, document.getElementById("root"));
