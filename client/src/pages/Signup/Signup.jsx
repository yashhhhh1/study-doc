/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signupfunc } from "../../services/Apis";
// import { UserContext } from "../../App";

export const Signup = () => {
  const navigate = useNavigate();
  // const {state, dispatch} = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const submitUserData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, password } = inputData;

    // Input validation
    if (validator.isEmpty(fname)) {
      return toast.error("First name is required");
    }
    if (validator.isEmpty(lname)) {
      return toast.error("Last name is required");
    }
    if (validator.isEmpty(email)) {
      return toast.error("Email address is required");
    }
    if (!validator.isEmail(email)) {
      return toast.error("Not a valid email");
    }
    if (validator.isEmpty(password)) {
      return toast.error("Password is required");
    }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
      );
    }

    // Prepare form data
    const data = new FormData();
    data.append("fname", fname);
    data.append("lname", lname);
    data.append("email", email);
    data.append("password", password);

    try {
      // Call signup function
      const response = await signupfunc(data);

      // Handle success response
      if (response.status === 200) {
        toast.success(response.data);
        setInputData({
          fname: "",
          lname: "",
          email: "",
          password: "",
        });
        // dispatch({type:"USER",payload:true});
        navigate("/login");
      } else {
        // Handle other statuses
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle error response
      console.error("Signup error:", error);
      toast.error(error.message || "An error occurred during signup");
    }
  };


  

  return (
    <>
      <ToastContainer />
      <section className="p-3 p-md-4 p-xl-2 border">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
              <div className="d-flex flex-column justify-content-between h-70 p-3 p-md-2 p-xl-3">
                <lottie-player
                  src="https://assets1.lottiefiles.com/private_files/lf30_sxw84pnl.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-1">
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details to register
                      </h3>
                    </div>
                  </div>
                </div>
                <form onSubmit={submitUserData}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="fname" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="fname"
                        placeholder="First Name"
                        value={inputData.fname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="lname" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        id="lname"
                        placeholder="Last Name"
                        value={inputData.lname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        value={inputData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        name="password"
                        id="password"
                        value={inputData.password}
                        onChange={handleChange}
                        required
                      />
                      <input
                        className="m-2"
                        id="check"
                        type="checkbox"
                        value={showPassword}
                        onChange={() => setShowPassword((prev) => !prev)}
                      />
                      <label
                        className="  form-check-label text-secondary"
                        htmlFor="showpassword"
                      >
                        Show Password
                      </label>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="iAgree"
                          id="iAgree"
                          required
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="iAgree"
                        >
                          I agree to the{" "}
                          <a
                            href="#!"
                            className="link-primary text-decoration-none"
                          >
                            terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-end">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="link-primary text-decoration-none"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


