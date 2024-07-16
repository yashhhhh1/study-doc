import { useNavigate, useParams } from "react-router-dom";
import { PdfAccess } from "./Pdf_Access"; // Ensure the path is correct
import { useEffect, useState } from "react";
import { subjectDetail } from "../../services/Apis";

export const PDFPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [subjectDetails, setSubjectDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await subjectDetail(id);

        if (result.status === 200) {
          setSubjectDetails(result.data.result[0]);
        } else {
          setError(result.data.message);
        }
        setLoading(false);
      } catch (err) {
        setError("Error fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const fileUrl = subjectDetails.filePath
    ? `http://localhost:8080${subjectDetails.filePath}`
    : null;

  console.log(fileUrl);

  if (loading) return <p>Loading PDF...</p>;
  if (error)
    return (
      <center style={{ marginTop: "50px" }}>
        <button type="button" className="btn btn-denger btn-lg">
          {error}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg "
          onClick={() => {
            navigate("/upload");
          }}
        >
          Upload Now
        </button>
      </center>
    );

  return (
    <div>
      {fileUrl ? <PdfAccess fileUrl={fileUrl} /> : <p>No PDF available.</p>}
    </div>
  );
};
