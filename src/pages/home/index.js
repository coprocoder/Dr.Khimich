import React from "react";
import PageFooter from "../../components/footer";
import HeaderBody from "../../components/header";
import GoodsPreview from "./goods";
import HomeIntro from "./intro";

const HomePage = () => {
  return (
    <>
      <HeaderBody />
      <HomeIntro />
      <GoodsPreview />
      <PageFooter />
    </>
  );
};

export default HomePage;
