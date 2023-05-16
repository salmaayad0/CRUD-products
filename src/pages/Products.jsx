import { useSelector } from "react-redux";
import ProductTable from "../componats/ProductTable";
import TableHeading from "../componats/TableHeading";
//import Swal from "sweetalert2";

export default function Porducts() {
  const { products, loading, error } = useSelector(
    (state) => state.productSlice
  );

  //delete button
  // const deleteProduct = (product) => {
  //   Swal.fire({
  //     title: `are you sure you want to delete ${product.title}?`,
  //     showCancelButton: true,
  //   }).then((data) => {
  //     if (data.isConfirmed) {
  //       fetch(`${URL}/${product.id}`, { method: "DELETE" })
  //         .then((res) => res.json())
  //         .then(() => getAllProducts());
  //     }
  //   });
  // };

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
        <div className="container my-5">
          <TableHeading />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th scope="col">Category</th>
                <th scope="col">Title</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {products.map((product) => (
              <ProductTable key={product.id} product={product} />
            ))}
          </table>
        </div>
      )}
    </>
  );
}
