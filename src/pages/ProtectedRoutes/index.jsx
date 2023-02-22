import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext, UserProvider } from "../../contexts/UserContext";

export function ProtectedRoutes(){
  const { user } = useContext(UserContext)

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(!user){
  //     navigate("/")
  //   }
  // }, [])
  
  return(
    <UserProvider>
      {user ? <Outlet/> : <Navigate to="/" />}
    </UserProvider>
  )
}