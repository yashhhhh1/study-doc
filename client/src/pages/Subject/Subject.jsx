import "./Subject.css";
import image from "../../assets/img1.png";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { subjectgetfunc } from "../../services/Apis";

export const Subject = () => {
  const { id } = useParams();
  const [subjectDetails, setSubjectDetails] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await subjectgetfunc(id);
        // console.log("Fetched data:", result); // Log fetched data
        setSubjectDetails(result.data.result);
      } catch (err) {
        console.error("Error fetching data:", err.msg);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [id]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const filteredSubjects = subjectDetails.filter((subject) => {
    if (filter === "all") return true;
    return subject.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <>
      <div className="container">
        <div className="container-subject d-flex justify-content-center">
          <div className="subject-title-card">
            <div className="subject-title-card-body">
              <h1>{id}</h1>
            </div>
          </div>
        </div>

        <div className="subject-filter">
          <div className="filter-container">
            <div className="d-flex mb-3">
              <div className="ms-auto p-2">
                <div className="btn-group dropstart">
                  <form action="">
                    <select
                      className="form-select form-control form-control-lg"
                      aria-label="Default select example"
                      name="Type"
                      value={filter}
                      onChange={handleFilterChange}
                    >
                      <option value="all">All</option>
                      <option value="Note">Note</option>
                      <option value="Practical">Practical</option>
                      <option value="Assignment">Assignment</option>
                      <option value="PPT">PPT</option>
                      <option value="other">Other</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-subject">
          {loading ? (
            <h1 className="text-center">Loading...</h1> // Display loading message while fetching
          ) : filteredSubjects && filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <div className="subject-card" key={index}>
                <Link to={`/subject/${id}/${subject._id}`}>
                  <div className="card-body d-flex gap-3">
                    <div className="subject-img">
                      <img src={image} className="width-90 rounded-3" alt="" />
                    </div>
                    <div className="subject-detail">
                      <h4>{subject.s_name}</h4>
                      <p className="overflow-hidden d-flex">
                        {subject.category}
                      </p>
                      <div className="subject-type d-flex gap-2">
                        <span className="badge rounded-pill bg-info text-dark">
                          {subject.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h1>No material found</h1>
          )}
        </div>
      </div>
    </>
  );
};
