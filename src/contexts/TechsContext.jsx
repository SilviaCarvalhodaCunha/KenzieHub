import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export function TechsProviders({ children }) {
  const { setModal, setModalUp, user } = useContext(UserContext);
  const [selectedTech, setSelectedTech] = useState(null);

  const registerTechnology = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("@USER", JSON.stringify(user));

      setModal(false);

      toast.success("Tecnologia cadastrada com sucesso!")

    } catch (error) {
      toast.error(error.message);
    }
  };

  const excludeTechnology = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("@USER", JSON.stringify(user));

      setModalUp(false);
      
      toast.success("Tecnologia excluída com sucesso!")

    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const updateTechnology = async (id, data) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      localStorage.setItem("@USER", JSON.stringify(user));

      toast.success("Tecnologia atualizada com sucesso")

      setModalUp(false)
    } catch (error) {
      toast.error("Algo deu errado!(update)");
    }
  };

  return (
    <TechsContext.Provider
      value={{
        registerTechnology,
        excludeTechnology,
        updateTechnology,
        selectedTech,
        setSelectedTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
}
