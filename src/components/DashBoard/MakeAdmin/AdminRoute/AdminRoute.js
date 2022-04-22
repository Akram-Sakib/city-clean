import React from "react";
import loader from "../../../Shared/Register/images/loader.svg";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import "./AdminRoute.css";

const AdminRoute = ({ children, ...rest }) => {
  let location = useLocation();
  const { user, admin, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-12 mt-4 mx-auto">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user?.email && admin) {
    return children;
  }
  return (
    // <div className="">
    //   <div className="flex justify-center mt-8">
    //     <img
    //       src="https://image.freepik.com/free-vector/intellectual-property-concept_52683-47925.jpg"
    //       alt=""
    //     />
    //   </div>
    //   <p className="text-red-500 mt-8 text-2xl text-center flex justify-center items-center">
    //     You are Not Authorized in this page
    //   </p>
    // </div>
    <Navigate to="/dashboard" state={{ from: location }} />
  );
  //
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user?.email && admin ? (
  //         children
  //       ) : (
  //         <div className="">
  //           <div className="flex justify-center mt-8">
  //             <img
  //               src="https://image.freepik.com/free-vector/intellectual-property-concept_52683-47925.jpg"
  //               alt=""
  //             />
  //           </div>
  //           <p className="text-red-500 mt-8 text-2xl text-center flex justify-center items-center">
  //             You are Not Authorized in this page
  //           </p>
  //         </div>
  //       )
  //     }
  //   />
  // );
};

export default AdminRoute;
