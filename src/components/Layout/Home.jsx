import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
   return (
      <div>
         <Header></Header>
         <Outlet></Outlet>
         <ToastContainer />
      </div>
   );
};

export default Home;
