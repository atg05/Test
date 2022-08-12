import React, { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const appRouting = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(appRouting, document.getElementById("root"));
