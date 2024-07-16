import { useState } from "react";
import "./course.css";
import { coursegetfunc } from "../../services/Apis";
import No_Data_Found from "../../assets/no-data-found.png";
import file from "../../assets/file.jpg";
import { Link } from "react-router-dom";

export const Course = () => {
  const [data, setData] = useState({ cname: "" });
  const [courseData, setCourseData] = useState([]); // To store  course data
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.cname.trim()) {
      setError("Course name cannot be empty");
      return;
    }
    try {
      const response = await coursegetfunc(data.cname);
      setCourseData(response.data.result);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const uniqueCourseNames = new Set();
  const uniqueCourses = courseData.filter(course => {
    if (!uniqueCourseNames.has(course.s_name)) {
      uniqueCourseNames.add(course.s_name);
      return true;
    }
    return false;
  });
  return (
    <>
      <div className="course-container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="header_text text-center mb-4">
              <h1>Search the Course</h1>
            </div>
            <form method="post" onSubmit={handleSubmit}>
              <div className="search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control"
                  name="cname"
                  onChange={handleChange}
                  placeholder="Have a question? Ask Now"
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>

      <div className="card-container container">
        <div className="row">
          {uniqueCourses.length > 0 ? (
            uniqueCourses.map((course, index) => (
              <div className="col-xl-12" key={index}>
                <Link to={`/subject/${course.s_name}`}>
                  <div className="material-card mb-3 course-card-body">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <img
                          src={file}
                          className="width-90 rounded-3"
                          alt="img"
                        />
                      </div>
                      <div className="col">
                        <div className="overflow-hidden flex-nowrap">
                          <h6 className="mb-1">{course.s_name}</h6>
                          <span className="text-muted d-block mb-2 small"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </Link>
              </div>
            ))
          ) : (
            <div className="col-xl-12">
              <img
                src={No_Data_Found}
                className=""
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
