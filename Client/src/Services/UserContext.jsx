import React, { createContext, useState, useEffect, useRef } from "react";
import { getJWTUser } from "./JWTLoggedUser";
import { getGoogleUser } from "./GoogleLoggedUser";
import { getAdminCodes } from "../Services/AdminCodes";
import { getUserCodes } from "../Services/UserCodes";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminCodes, setAdminCodes] = useState([]);
  const [userCodes, setUserCodes] = useState([]);
  const AdminEmail = "hanshulkumawat22@gmail.com";
  const [Displaybtns, setDisplaybtns] = useState(false);
  const initialRender = useRef(true);
  // console.log("user from context",user);

  useEffect(() => {
    // if (initialRender.current) {
    //   initialRender.current = false;
    //   console.log("if condition called");
    //   return;
    // }
    // console.log("dfgdfrg");
    
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");  
        if (token) {
          const jwtUserData = await getJWTUser(token);
          setUser(jwtUserData.data);
        } else {
          const googleUserData = await getGoogleUser();
          setUser(googleUserData);
        }
      } catch (error) {
        setError("Failed to fetch user data");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAdminCodes = async () => {
      try {
        const codes = await getAdminCodes();
        setAdminCodes(codes);
        
        
      } catch (error) {
        console.error("Failed to fetch admin codes:", error);
      }
    };

    fetchAdminCodes();
  }, []);

  useEffect(() => {
    const fetchUserCodes = async () => {
      try {
        const codes = await getUserCodes();
        setUserCodes(codes);
      } catch (error) {
        console.error("Failed to fetch user codes:", error);
      }
    };

    fetchUserCodes();
  }, []);

  useEffect(() => {
    const checkuser = () => {
      if (
        user &&
        (user.email === AdminEmail ||
          (user.user && user.user.email === AdminEmail))
      ) {
        setDisplaybtns(true);
      }
    };

    checkuser();
  }, [user, AdminEmail]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        setUser,
        adminCodes,
        setAdminCodes,
        setUserCodes,
        userCodes,
        AdminEmail,
        Displaybtns,
        setDisplaybtns,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
