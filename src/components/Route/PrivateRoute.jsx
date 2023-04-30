import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(authContext);

   const location = useLocation();
   console.log(location);
   if (loading) {
      return (
         <div className="spiner-container">
            <span className="loader"></span>;
         </div>
      );
   }
   if (user) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
