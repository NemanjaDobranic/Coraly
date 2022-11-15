import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { userKey } from "../../../config/localStorageKeys";

function Logout() {
  useEffect(() => {
    localStorage.removeItem(userKey);
  }, []);

  return <Navigate to="/" />;
}

export default Logout;
