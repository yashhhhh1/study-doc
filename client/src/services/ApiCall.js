import axios from "axios";

export const commonrequest = async (method, url, body, headers) => {
  const config = {
    method: method,
    url: url,
    headers: headers || {
      "Content-Type": "application/json",
    },
    withCredentials:true,

    data: body,
  };

  try {
    const response = await axios(config);
    return response; // Return the full response object for status checking
  } catch (error) {
    console.error("Request error:", error);

    if (error.response) {
      return error.response; // Return the full response object for status checking
    } else if (error.request) {
      return { message: "No response received from server", error: error.request };
    } else {
      return { message: "Error in request setup", error: error.message };
    }
  }
};
