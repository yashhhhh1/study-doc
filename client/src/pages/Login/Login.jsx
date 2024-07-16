/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { loginfunc } from "../../services/Apis";
import validator from "validator";
import { UserContext } from "../../App";

export const Login = () => {
  const {state, dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [inputData, setInputData] = useState({
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
    const { email, password } = inputData;

    // Input validation
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
    data.append("email", email);
    data.append("password", password);

    try {
      // Call login function
      const response = await loginfunc(data);

      // Handle success response
      if (response.status === 200) {
        toast.success(response.message);
        setInputData({
          email: "",
          password: "",
        });
        localStorage.setItem("usersdatatoken", response.data.result.token);
        dispatch({type:"SET_USER",payload:true});
        navigate("/");
      } else {
        // Handle other statuses
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle error response
      console.error("Login error:", error);
      toast.error(error.message || "An error occurred during login");
    }
  };


  return (
    <>
      <ToastContainer />
      <section className="p-3 p-md-4 p-xl-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
              <div className="d-flex flex-column justify-content-between h-70 p-1 p-md-2 p-xl-3">
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
                    <div className="mb-5">
                      <h2 className="h3">Log IN</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details
                      </h3>
                    </div>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={inputData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
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
                          onClick={submitUserData}
                        >
                          log IN
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-end">
                      Not have an account?{" "}
                      <a
                        href="/signup"
                        className="link-primary text-decoration-none"
                      >
                        Sign up
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


