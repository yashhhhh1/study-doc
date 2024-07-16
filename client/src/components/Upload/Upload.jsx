import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";
import { uploadfunc } from "../../services/Apis";

export const Upload = () => {
  const [file, setFile] = useState(null);
  const [inputData, setInputData] = useState({
    c_name: "",
    s_name: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const submitMatrialData = async (e) => {
    e.preventDefault();

    const { c_name, s_name, category, description } = inputData;

    if (validator.isEmpty(c_name)) {
      return toast.error("cource name is required");
    } else if (validator.isEmpty(s_name)) {
      return toast.error("subject name is required");
    } else if (validator.isEmpty(category)) {
      return toast.error("category is required");
    } else if (validator.isEmpty(description)) {
      return toast.error("description is required");
    } else if (!file || file.name === undefined) {
      return toast.error("File is required");
    } else {
      const validExtensions = ["pdf", "word", "ppt"];
      const filename = file.name;
      const fileExt = filename.split(".").pop().toLowerCase();

      if (!validExtensions.includes(fileExt.toLowerCase())) {
        return toast.error(
          "File extension must be PDF, Word, or PowerPoint (PPT)"
        );
      }

      try {
        const data = new FormData();
        data.append("file", file);

        for (const key in inputData) {
          data.append(key, inputData[key]);
        }

        const headers = {
          "Content-Type": "multipart/form-data",
        };

        // Call upload function

        const response = await uploadfunc(headers, data);

        // Handle success response
        if (response.status === 200) {
          toast.success(response.data.message);
          setInputData({
            c_name: "",
            s_name: "",
            category: "",
            description: "",
          });
        } else {
          // Handle other statuses
          toast.error(response.data.message);
        }
      } catch (error) {
        // Handle error response
        console.error("Upload error:", error);
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "An error occurred during upload"
        );
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container h-auto">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Upload File</h1>
                <p className="lead">
                  Upload One File And Access One Day For Studoc
                </p>
              </div>
              <div className="card_upload">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form
                      method="post"
                      encType="multipart/form-data"
                      onSubmit={submitMatrialData}
                    >
                      <div className="form-group p-2">
                        <label>Course</label>
                        <select
                          className="form-select form-control form-control-lg"
                          aria-label="Default select example"
                          name="c_name"
                          onChange={handleChange}
                          value={inputData.c_name}
                        >
                          <option value="">Select Course</option>
                          <option value="engineering">Engineering</option>
                          <option value="medical">Medical</option>
                          <option value="commerce">Commerce</option>
                          <option value="arts">Arts</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="form-group p-2">
                        <label>Subject</label>
                        <select
                          className="form-select form-control form-control-lg"
                          aria-label="Default select example"
                          name="s_name"
                          onChange={handleChange}
                          value={inputData.s_name}
                        >
                          <option value="">Select the Subject</option>
                          <option value="java">Java</option>
                          <option value="python">Python</option>
                          <option value="os">OS</option>
                          <option value="dbms">DBMS</option>
                        </select>
                      </div>
                      <div className="form-group p-2">
                        <label>Category</label>
                        <select
                          className="form-select form-control form-control-lg"
                          aria-label="Default select example"
                          name="category"
                          onChange={handleChange}
                          value={inputData.category}
                        >
                          <option value="">Select the Category</option>
                          <option value="note">Note</option>
                          <option value="practical">Practical</option>
                          <option value="assignment">Assignment</option>
                          <option value="ppt">PPT</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* <div className="form-group p-2">
                      <label>Extension</label>
                      <div className="border row m-2 p-2">
                        <div className="form-check col-md-6">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="pdf"
                            value="pdf"
                            name="extention"
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="pdf">
                            PDF
                          </label>
                        </div>
                        <div className="form-check col-md-6">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="ppt"
                            value="ppt"
                            name="extention"
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="ppt">
                            PPT
                          </label>
                        </div>
                        <div className="form-check col-md-6">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="word"
                            value="word"
                            name="extention"
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="word">
                            Word
                          </label>
                        </div>
                      </div>
                    </div> */}

                      <div className="form-group p-2">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Upload Material
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            name="uploaded_file"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <div className="form-group p-2">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="description"
                          onChange={handleChange}
                          value={inputData.description}
                        ></textarea>
                      </div>
                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
