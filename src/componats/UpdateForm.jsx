import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProduct } from '../Redux/slices/productSlice';

export default function UpdateForm(props) {
    const item = props.item;

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [image, setImage] = useState(item.image);

  const dispatch = useDispatch();
  

  const titleHandling = (e) => {
    setTitle(e.target.value);
  };

  const priceHandling = (e) => {
    setPrice(e.target.value);
  };

  const descriptionHandling = (e) => {
    setDescription(e.target.value);
  };

  const categoryHandling = (e) => {
    setCategory(e.target.value);
  };

  const imageHandling = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({id: item.id, obj: {
        title, price, description, category, image
    }}));
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setPrice(0);
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <>
     <div className="container-fluid">
        <h3>Add New Product</h3>
        <div style={{ width: "700px" }} className="mx-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                product name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onInput={(e) => titleHandling(e)}
                aria-describedby="Product Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                product price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onInput={(e) => priceHandling(e)}
                aria-describedby="Product price"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                product description
              </label>
              <textarea
                type="text"
                rows="3"
                className="form-control"
                id="description"
                value={description}
                onInput={(e) => descriptionHandling(e)}
                aria-describedby="Product Description"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                product Category
              </label>
              <select
                type="text"
                className="form-control"
                id="category"
                value={category}
                onInput={(e) => categoryHandling(e)}
                aria-describedby="Product Category"
              >
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                product image
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={image}
                onInput={(e) => imageHandling(e)}
                aria-describedby="Product image"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
