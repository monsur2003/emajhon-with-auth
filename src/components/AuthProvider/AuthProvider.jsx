import React, { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // create a new user with email and password

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // sign in with email and password

   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // google signIn functionality
   const googleSignIn = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider);
   };

   // logout functionality

   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoading(false);
         setUser(currentUser);
      });
      return () => {
         return unSubscribe();
      };
   }, []);
   const authInfo = {
      user,
      loading,
      googleSignIn,
      createUser,
      logOut,
      login,
   };

   return (
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
   );
};

export default AuthProvider;
