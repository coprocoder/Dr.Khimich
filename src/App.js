import React from "react";
import {Routes, Route} from "react-router-dom";
import loadable from "@loadable/component";
import {CircularProgress} from "@mui/material";

const Home = loadable(() => import("./pages/home"), {
  fallback: <CircularProgress />,
});

const Pricing = loadable(() => import("./pages/pricing"), {
  fallback: <CircularProgress />,
});

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
