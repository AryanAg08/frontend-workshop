import React, { useState } from "react";
import { toast } from "react-toastify";
import "./usestate.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
      ) {
        alert("Invalid email format");
      }

    try {
      const response = await fetch("http://3.106.183.96:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.code === 200) {
        setStatus({ success: true, message: 'User saved successfully!!'});
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      }
    console.log(formData);
    } catch (error) {
      console.error("Error during register:", error);
      toast.error("An error occured during registration");
    }
  };

  return (
    <div className="main-register">
      <div className="register-div">
        <form onSubmit={handleSubmit}>
          <div id="registerform">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Your Email"
              className="register-input"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              className="register-input"
              required
            />
          </div>

          <div className="register-btns">
            <button className="register-btn" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
