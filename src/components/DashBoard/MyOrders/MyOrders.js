import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://city-clean.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
            alert("deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="m-1 min-h-screen">
      <h3 className="pt-6 px-4 text-xl font-bold">My Orders</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {orders.map((order) => (
          <MyOrder
            order={order}
            handleDeleteUser={handleDeleteUser}
            key={order._id}
          ></MyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
