import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.png";
import hide from "../../assets/hidden.png";
import { authContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
   const [control, setControl] = useState(false);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const { createUser } = useContext(authContext);

   const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.pass.value;
      const confirmPassword = form.confirm.value;

      if (password !== confirmPassword) {
         setError("Password Didn't match");
         return;
      } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
         setError("please enter atleast two number");
         return;
      }

      createUser(email, password)
         .then((result) => {
            const loggedUser = result.user;
            setError("");
            setSuccess("user created successfully");
            form.reset();
            console.log(loggedUser);
         })
         .catch((error) => {
            setSuccess("");
            setError(error.message);
         });
   };

   return (
      <div className="container">
         <form onSubmit={handleSignUp} className="login-form">
            <h2 className="form-title">Sign up</h2>
            <div className="form-control">
               <label htmlFor="email" className="login-form__label">
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="login-form__input"
               />
            </div>
            <div className="form-control">
               <label htmlFor="password" className="login-form__label">
                  Password
               </label>
               <input
                  type={control ? "text" : "password"}
                  id="password"
                  className="login-form__input"
                  name="pass"
                  required
               />
               <div
                  onClick={() => {
                     setControl(!control);
                  }}
                  className="control">
                  {control ? (
                     <img src={hide} alt="" />
                  ) : (
                     <img src={eye} alt="" />
                  )}
               </div>
            </div>
            <div className="form-control">
               <label htmlFor="confirmPassword" className="login-form__label">
                  Confirm Password
               </label>
               <input
                  type={control ? "text" : "password"}
                  id="password"
                  className="login-form__input"
                  name="confirm"
                  required
               />
               <div
                  onClick={() => {
                     setControl(!control);
                  }}
                  className="control">
                  {control ? (
                     <img src={hide} alt="" />
                  ) : (
                     <img src={eye} alt="" />
                  )}
               </div>
            </div>

            <div className="alert">
               {error ? (
                  <p className="error">{error}</p>
               ) : (
                  <p className="success">{success}</p>
               )}
            </div>

            <button type="submit" className="login-form__button">
               Sign up
            </button>

            <div className="signup">
               <small>
                  Already have an Account <Link to="/login">Login</Link>{" "}
               </small>
            </div>

            <div className="or">
               <hr /> or <hr />
            </div>

            <button type="button" className="login-form__google-button">
               <span className="login-form__google-icon"></span>
               Login with Google
            </button>
         </form>
      </div>
   );
};

export default SignUp;
