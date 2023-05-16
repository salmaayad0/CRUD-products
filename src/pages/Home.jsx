import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../componats/ProductCard";

export default function Home() {
  const { products, loading, error } = useSelector(
    (state) => state.productSlice
  );

  return (
    <>
      {error && !loading ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid my-5">
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
