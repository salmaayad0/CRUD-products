import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../Redux/slices/productSlice";

export default function ProductCard(props) {
  const { id, title, category, image } = props.product;

  const dispatch = useDispatch();

  const detailsHandling = () => {
    dispatch(detailsProduct(id));
  };
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 my-3">
        <Card style={{ width: "18rem", minHeight: "250px" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{
              height: "200px",
              width: "200px",
              objectFit: "contain",
              display: "block",
              margin: "auto",
            }}
          />
          <Card.Body>
            <Card.Title
              className="text-center"
              style={{ height: "25px", overflow: "hidden" }}
            >
              {title}
            </Card.Title>
            <Card.Text
              className="text-center"
              style={{ height: "20px", overflow: "hidden" }}
            >
              {category}
            </Card.Text>
            <Link
              to={`/Products/${id}`}
              onClick={(id) => detailsHandling(id)}
              style={{ width: "100%" }}
              className="btn btn-dark text-center"
            >
              Details
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
