import React, { useEffect, useState } from "react";
import "./Register.css";
import Table from "../Table/Table";
const Register = () => {
  const getDataStorage = () => {
    const data = localStorage.getItem("products-list");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  };

  const [products, setProducts] = useState(getDataStorage());
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("Red");
  const [dec, setDec] = useState("");

  const clearInput = () => {
    setId("");
    setProductName("");
    setPrice("");
    setQuantity("");
    setDec("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id,
      productName,
      price,
      quantity,
      color,
      dec,
    };

    setProducts([...products, product]);
    clearInput();
  };
  const handleDelete = (id) => {
    const filterProducts = products.filter((element, index) => {
      return element.id !== id;
    });
    setProducts(filterProducts);
  };
  console.log(products);
  useEffect(() => {
    localStorage.setItem("products-list", JSON.stringify(products));
  }, [products]);

  return (
    <div className="container">
      <h1 className="header_title"> CURD OPERATION IN REACT</h1>

      <div className="register_container">
        <div className="register_form">
          <form onSubmit={handleSubmit} action="" className="form_section">
            <div className="input_area">
              <label>id</label>
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="id"
              />
            </div>
            <div className="input_area">
              <label>Product Name</label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder="Product Name"
              />
            </div>
            <div className="input_area">
              <label>Price</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Price"
              />
            </div>
            <div className="input_area">
              <label>Quantity</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="text"
                placeholder="Quantity"
              />
            </div>
            <div className="input_area">
              <label>Colors</label>
              <select
                required
                value={color}
                onChange={(e) => setColor(e.target.value)}>
                {/* <option>select your color</option> */}
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
              </select>
            </div>
            <div className="input_area">
              <label>Description</label>
              <textarea
                value={dec}
                onChange={(e) => setDec(e.target.value)}
                cols="30"
                rows="3"></textarea>
            </div>

            <button className="submit_btn">Add Item</button>
          </form>
        </div>
        {/* //========== table section ========== */}
        <div className="table_container">
          <Table products={products} handleDelete={handleDelete} />
          <button onClick={() => setProducts([])}>Clear All Products</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
