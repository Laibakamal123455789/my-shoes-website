"use client"
import { removecart } from '@/store/slices/product'
import { meraStore } from '@/store/store'
import React, { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Page(){
    return <Provider store={meraStore}>
        <Cart></Cart>
    </Provider>
}
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  
  const [selectedIndex, setSelectedIndex] = useState(null);

  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });

  const handleDelete = () => {
    if (selectedIndex !== null) {
      
      dispatch(removecart(selectedIndex)); 
      setSelectedIndex(null); 
    } else {
      toast.warning("Please select an item to delete.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Shopping Cart{" "}
        <span style={{ fontSize: "16px", color: "gray" }}>
          ({cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart)
        </span>
      </h2>

      <table className="table table-hover table-bordered shadow-lg">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col" className="text-center">Select</th>
            <th scope="col" className="text-center">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col" className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="align-middle">
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={selectedIndex === index}
                  onChange={() => setSelectedIndex(selectedIndex === index ? null : index)}
                />
              </td>
              <td className="text-center">
                <img
                  width="50"
                  height="50"
                  src={item.src}
                  alt={item.name}
                  style={{
                    borderRadius: "8px",
                    border: "2px solid #ddd",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td>{item.name}</td>
              <td className="text-right">${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3" className="text-right">
              <strong>Total Bill:</strong>
            </th>
            <th className="text-right text-success">${total.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>

      <div className="d-flex justify-content-between mt-4">
        {/* Delete button */}
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Delete Selected Item
        </button>

        {/* Checkout button */}
        <button
          onClick={() => {
            toast.success("soon you will receive order!Thank You Very Much");
           
          }}
          className="btn btn-success btn-sm"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}




