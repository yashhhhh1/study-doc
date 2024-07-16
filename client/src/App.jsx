import { createContext, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import { Course } from "./pages/Course/Course";
import { Subject } from "./pages/Subject/Subject";
import { Signup } from "./pages/Signup/Signup";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

// componets
import { Headers } from "./components/Headers/Headers";
import { Footer } from "./components/Footer/Footer";
import { UserDetail } from "./components/User_Details/UserDetail";
import { Upload } from "./components/Upload/Upload";
import { Logout } from "./components/Logout/Logout";
import { PDFPage } from "./components/PDF_Access/PDFPage";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

// usecontext
export const UserContext = createContext();
import { initialState, reducer } from "./reducer/UseReducer";
import { Notfound } from "./NotFound/Notfound";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("SET_USER"));
    if (user) {
      dispatch({ type: "SET_USER", payload: user });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Headers />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdetails" element={<UserDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/course" element={<Course />} />
          <Route path="/subject/:id" element={<Subject />} />
          <Route path="/subject/:subject/:id" element={<PDFPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
