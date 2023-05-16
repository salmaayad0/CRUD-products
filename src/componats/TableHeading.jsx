import React from "react";
import { Link } from "react-router-dom";

export default function TableHeading() {
  return (
    <>
      <h1 className="text-center">All Porducts</h1>
      <Link to={"/Products/Add"} className="btn btn-dark my-2">
        Add New Product
      </Link>
    </>
  );
}
