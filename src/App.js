import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "./components/DashBoard/Dashboard";
import MyOrders from "./components/DashBoard/MyOrders/MyOrders";
import About from "./components/Home/AboutUs/About/About";
import ContactForm from "./components/Home/Contact/ContactForm/ContactForm";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import DashBoardHome from "../src/components/DashBoard/DashBoardHome/DashBoardHome";
import AddReview from "../src/components/DashBoard/AddReview/AddReview";
import AddServices from "../src/components/DashBoard/AddServices/AddServices";
import ManageOrder from "../src/components/DashBoard/ManageOrder/ManageOrder";
import ManageServices from "../src/components/DashBoard/ManageServices/ManageServices";
import MakeAdmin from "../src/components/DashBoard/MakeAdmin/MakeAdmin";
import AdminRoute from "../src/components/DashBoard/MakeAdmin/AdminRoute/AdminRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/contact" element={<ContactForm />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/browseServices"
              element={
                <PrivateRoute>
                  {" "}
                  <Services />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  {" "}
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashBoardHome />}></Route>
              <Route
                path={`/dashboard/myorders`}
                element={<MyOrders />}
              ></Route>
              <Route
                path={`/dashboard/addreview`}
                element={<AddReview />}
              ></Route>
              <Route
                path={`/dashboard/addservices`}
                element={
                  <AdminRoute>
                    <AddServices />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageorders`}
                element={
                  <AdminRoute>
                    <ManageOrder />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageservices`}
                element={
                  <AdminRoute>
                    <ManageServices />
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route
              path="/myorders"
              element={
                <PrivateRoute>
                  {" "}
                  <MyOrders />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
