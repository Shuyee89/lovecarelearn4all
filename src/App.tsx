import React from "react";
import Home from "./pages/Landingpage";
// import Profiletest from "./pages/Profiletest";
import Homepage from "./pages/Homepage";
import Return from "./pages/Return";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path="/return" element={<Return />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
