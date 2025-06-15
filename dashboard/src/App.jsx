import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../dashboard/src/components/Home";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
