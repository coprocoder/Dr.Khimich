import PageFooter from "../../components/footer";
import PageHeader from "../../components/header";
import GoodsPreview from "./goods";
import HomeIntro from "./intro";

const HomePage = () => {
  return (
    <>
      <PageHeader />
      <HomeIntro />
      <GoodsPreview />
      <PageFooter />
    </>
  );
};

export default HomePage;
