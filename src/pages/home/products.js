import React from "react";
import {ProductsGrid, ProductsIntro} from "../gallery/products";

const ProductsPreview = () => {
  return (
    <>
      <ProductsIntro />
      <ProductsGrid count={3} />
    </>
  );
};

export default ProductsPreview;
