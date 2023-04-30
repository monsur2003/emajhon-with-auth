import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Header = () => {
   const { user, loading, logOut } = useContext(authContext);

   const handleSignOut = () => {
      logOut();
   };

   return (
      <nav className="header">
         <img src={logo} alt="" />
         <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signUp">Sign Up</Link>
         </div>

         {user && (
            <div className="image">
               <img src={user ? user.photoURL : null} alt="" />
               <button onClick={handleSignOut} className="login-form__button">
                  SignOut
               </button>
            </div>
         )}
      </nav>
   );
};

export default Header;
