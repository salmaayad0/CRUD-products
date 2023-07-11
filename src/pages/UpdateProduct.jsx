import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../Redux/slices/productSlice";
import { useParams } from "react-router";
import UpdateForm from "../componats/UpdateForm";

export default function UpdateProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(detailsProduct(id))
  }, [])

  const { loading, error, item } = useSelector( state => state.productSlice )

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
    ) : ( <UpdateForm item={item} /> )}
    </>
  );
}
