import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import loadable from "@loadable/component";
import {CircularProgress} from "@mui/material";

const Home = loadable(() => import("./pages/home"), {
  fallback: <CircularProgress />,
});

const Pricing = loadable(() => import("./pages/pricing"), {
  fallback: <CircularProgress />,
});

const Notfound = () => <div>not found</div>;

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
