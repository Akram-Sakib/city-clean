import React, { useEffect, useState } from "react";
import ManageAllServices from "./ManageAllServices/ManageAllServices";

const ManageServices = () => {
  const [manageServices, setmanageServices] = useState([]);
  useEffect(() => {
    fetch("https://city-clean.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setmanageServices(data));
  }, []);

  // DELETE
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are You sure You want to DELETE?");
    if (proceed) {
      fetch(`https://city-clean.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrders = manageServices.filter(
              (order) => order._id !== id
            );
            setmanageServices(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="font-bold text-lg mt-4 ml-6 text-center lg:text-left">
        Manage Services
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-4 ">
        {manageServices.map((manageService) => (
          <ManageAllServices
            handleDeleteUser={handleDeleteUser}
            manageService={manageService}
            key={manageService._id}
          ></ManageAllServices>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
