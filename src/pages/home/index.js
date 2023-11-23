import React from "react";
import ProductsPreview from "./products";
import HomeIntro from "./intro";
import YandexMap from '../../components/map/map'

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <ProductsPreview />
      <YandexMap />
    </>
  );
};

export default HomePage;
