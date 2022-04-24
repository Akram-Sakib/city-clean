import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const form = document.getElementById("formSubmit");
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://city-clean.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();
          setSuccess("SuccessFully updated admin role to the user!");
          setError("");
        } else {
          form.reset();
          setError("email not registered");
        }
      });
  };
  return (
    <div className="h-screen">
      <div className=" pt-16">
        <h2 className="text-center font-bold text-lg lg:text-xl md:text-xl">
          Please Type email to make an admin
        </h2>
        <div>
          <form
            id="formSubmit"
            onSubmit={handleSubmit}
            className="flex justify-center my-8 "
          >
            <input
              className="focus:outline-none w-9/12 lg:w-6/12 py-2 px-4"
              type="email"
              onBlur={handleOnBlur}
              placeholder="Type Email"
              name="email"
              id=""
            />
            <input
              className="cursor-pointer mx-4 px-5 py-2 bg-pink-500 text-white rounded-md"
              type="submit"
              value="Submit"
            />
          </form>
          <div>
            {success && (
              <p className="text-center text-green-600 ">{success}</p>
            )}

            {error && <p className="text-center text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
