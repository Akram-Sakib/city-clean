import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import loader from "../../Shared/Register/images/loader.svg";

const PrivateRoute = ({ children, ...rest }) => {
  let location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-12 mt-4 mx-auto">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user?.email ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};

export default PrivateRoute;
