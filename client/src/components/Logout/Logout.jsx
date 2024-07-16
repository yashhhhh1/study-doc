/* eslint-disable no-unused-vars */


import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { logoutfunc } from '../../services/Apis';


export const Logout = () => {
  
  const {state, dispatch} = useContext(UserContext);




  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      let token = localStorage.getItem("usersdatatoken");

      if (!token) {
        console.error("No token found in localStorage");
        navigate("/")
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        Accept: "application/json",
      };

      try {
        const response = await logoutfunc(headers);

        if (response.status === 200) {
          console.log("User logged out");
          localStorage.removeItem("usersdatatoken");
          dispatch({type:"LOGOUT",payload:false});
          navigate("/login");
        } else {
          console.log("Logout error", response);
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    logout();
  }, []);

  return <div>Logging out...</div>;
};


