import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({})

export function UserProvider({children}) {
  const navigate = useNavigate();

  const localStorageUser = localStorage.getItem("@USER")
  const [user, setUser] = useState(localStorageUser? JSON.parse(localStorageUser) : null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if(token){
      const userAutoLogin = async() => {
        try {
          const response = await api.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(response.data)
          navigate("/dashboard")
          
        } catch (error) {
          console.log(error)

          toast.error("Algo deu errado!")

        }
      }
      userAutoLogin()
    }
  }, [])


  const userRegister = async(data) => {
    try {      
      const response = await api.post('/users', data)
      
      toast.success("Cadastro realizado com sucesso!")

      navigate("/");

    } catch (error) {
      
      toast.error(error.response.data.message)      
    
    }
  }


  const userLogin = async(data) => {
    setLoading(true);
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user)

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      localStorage.setItem("@USER", JSON.stringify(response.data.user));

      toast.success("Login realizado com sucesso!");

      navigate("/dashboard");

    } catch (error) {

      toast.error("Email ou senha inválidos");

    } finally {

      setLoading(false);

    }
  }

  const userLogout = () => {
    setUser(null)

    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    localStorage.removeItem("@USER")

    navigate("/")
  }


  return (
    <UserContext.Provider value={{userRegister, userLogin, userLogout, loading, user}}>
      {children}
    </UserContext.Provider>
  )
}