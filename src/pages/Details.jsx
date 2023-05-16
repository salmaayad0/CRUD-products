import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Details() {
  const { item, loading, error } = useSelector((state) => state.productSlice);

  //const { title, price, description, category, image } = item;

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
        <>
          <div className="container-fluid">
            <div className="d-flex flex-column">
            <h2 className="text-center my-3">{item.title}</h2>
            <img
              src={item.image}
              alt=""
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />

             <Button className="text-center my-3" variant="dark">
             {item.price}
            </Button>
            <p>{item.description}</p>
            <Button className="text-center mb-3"  variant="dark">
            {item.category}
            </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
