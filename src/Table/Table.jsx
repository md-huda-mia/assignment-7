import React from "react";

const Table = ({ products, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Color</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.productName}</td>
            <td>
              <i class="fa-solid fa-bangladeshi-taka-sign"></i> {item.price}
            </td>
            <td>{item.quantity}</td>
            <td>{item.color}</td>
            <td>{item.dec}</td>
            <td onClick={() => handleDelete(item.id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
