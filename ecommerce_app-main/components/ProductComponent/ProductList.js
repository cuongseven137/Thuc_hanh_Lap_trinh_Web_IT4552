import React from "react";
import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
}
