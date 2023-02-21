import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import loadable from "@loadable/component";
import {CircularProgress} from "@mui/material";
import Header from "./components/header";
import PageFooter from "./components/footer";

const HomePage = loadable(() => import("./pages/home"), {
  fallback: <CircularProgress />,
});

const ProductsGallery = loadable(() => import("./pages/products"), {
  fallback: <CircularProgress />,
});

const NotFound = () => <div>not found</div>;

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsGallery />} />
        <Route element={<NotFound />} />
      </Routes>

      <PageFooter />
    </HashRouter>
  );
}

export default App;
