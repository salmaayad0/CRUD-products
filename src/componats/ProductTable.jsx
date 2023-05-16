import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, detailsProduct } from "../Redux/slices/productSlice";

export default function ProductTable(props) {
  const { id, category, title } = props.product;

  const dispatch = useDispatch();

  const deleteHandling = () => {
    dispatch(deleteProduct(id));
  }

  const detailsHandling = () => {
    dispatch(detailsProduct(id))
  }

  return (
    <>
      <tbody>
        <tr>
          <th>{id}</th>
          <td>{category}</td>
          <td>{title}</td>
          <td>
            <Link to={`/Products/${id}`} onClick={id => detailsHandling(id)} className="btn btn-dark btn-sm">
              Details
            </Link>
          </td>
          <td>
            <button className="btn btn-primary btn-sm">Update</button>
          </td>
          <td>
            <button className="btn btn-danger btn-sm" onClick={id => deleteHandling(id)}>Delete</button>
          </td>
        </tr>
      </tbody>
    </>
  );
}
