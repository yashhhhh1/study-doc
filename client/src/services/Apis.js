import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helper";

// Signup function
export const signupfunc = async (data, header) => {
  try {
    const response = await commonrequest(
      "POST",
      `${BASE_URL}/auth/signup`,
      data,
      header
    );
    return response;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// Login function
export const loginfunc = async (data, header) => {
  try {
    const response = await commonrequest(
      "POST",
      `${BASE_URL}/auth/login`,
      data,
      header
    );
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// fetch the cources list
export const coursegetfunc = async (courceName) => {
  const response = await commonrequest(
    "GET",
    `${BASE_URL}/cource/${courceName}`
  );
  return response;
};

// fetch the secifice subject list
export const subjectgetfunc = async (subjectName) => {
  const response = await commonrequest(
    "GET",
    `${BASE_URL}/subject/${subjectName}`
  );
  return response;
};

// fetch the one subject(metrial) detail  detail
export const subjectDetail = async (id) => {
  const response = await commonrequest(
    "GET",
    `${BASE_URL}/subjectdetail/${id}`
  );
  
  return response;
};

// Logout Function
export const logoutfunc = async (headers) => {
  try {
    const response = await commonrequest(
      "GET",
      `${BASE_URL}/auth/logout`,
      null,
      headers
    );
    return response;
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// userDeatils Function
export const userDeatilsfunc = async (headers) => {
  try {
    const response = await commonrequest(
      "GET",
      `${BASE_URL}/auth/userDetails`,
      null,
      headers
    );
    return response;
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// upload function
export const uploadfunc =async (header,data)=>{

  try {
    const response = await commonrequest(
      "POST",
      `${BASE_URL}/upload`,
      data,
      header
    );
    console.log("upload response:", response);
    return response;
  } catch (error) {
    console.error("upload error:", error);
    throw error;
  }
}
