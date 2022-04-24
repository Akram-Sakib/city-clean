import React, { useEffect, useState } from "react";
import ManageAllOrderes from "./ManageAllOrders/ManageAllOrderes";

const ManageOrder = () => {
  const [allorders, setAllOrders] = useState([]);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`https://city-clean.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrder = allorders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrder);
          }
        });
    }
  };

  // UPDATE
  // update order status
  const handleUpdate = (id) => {
    fetch(`https://city-clean.herokuapp.com/orders/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("order updated successfully");
          setUpdateSuccess(true);
        }
      });
  };

  useEffect(() => {
    fetch(`https://city-clean.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div className="m-2 md:m-0">
      <h3 className="pt-6 px-8 text-xl text-center lg:text-left font-bold">
        Manage All Orders
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mx-0 lg:mr-2">
        {allorders.map((order) => (
          <ManageAllOrderes
            updateSuccess={updateSuccess}
            handleUpdate={handleUpdate}
            handleDeleteUser={handleDeleteUser}
            key={order._id}
            order={order}
          ></ManageAllOrderes>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
