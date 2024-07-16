import { useEffect, useState } from "react";
import "./User_Details.css";
import { userDeatilsfunc } from "../../services/Apis";

export const UserDetail = () => {
 
  const [UserDeails, SetUserDeails] = useState({
    fname: "demo",
    lname: "demo",
    email: "demo@gmail.com",
    password: "12345678",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    SetUserDeails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const UserDeails = async () => {
      let token = localStorage.getItem("usersdatatoken");

      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        Accept: "application/json",
      };

      try {
        const response = await userDeatilsfunc(headers);
          console.log(response.data.validUserOne);
          SetUserDeails(response.data.validUserOne)
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    UserDeails();
  }, []);


  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="user-card">
                <div className="user-card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>{UserDeails.fname}</h4>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="user-card">
                <div className="user-card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={`${UserDeails.fname} ${UserDeails.lname}`}
                        onChange={handlechange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={UserDeails.email}
                        onChange={handlechange}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="password"
                        className="form-control"
                        value={UserDeails.password}
                        onChange={handlechange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      {/* <input
                        type="button"
                        className="btn btn-primary px-4"
                        value="Save Changes"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-sm-12">
                  <div className="user-card">
                    <div className="user-card-body">
                      <h5 className="d-flex align-items-center mb-3">
                        Project Status
                      </h5>
                      <p>Web Design</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Website Markup</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>One Page</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Mobile Template</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Backend API</p>
                      <div className="progress" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


