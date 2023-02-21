import React from "react";
import {ProductsGrid, ProductsIntro} from "../products";

const ProductsPreview = () => {
  return (
    <>
      <ProductsIntro />
      <ProductsGrid count={3} />
    </>
  );
};

export default ProductsPreview;
