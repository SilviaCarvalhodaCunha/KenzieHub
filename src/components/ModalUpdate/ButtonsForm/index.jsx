import React, { useContext } from "react";
import { TechsContext } from "../../../contexts/TechsContext";
import { UserContext } from "../../../contexts/UserContext";
import { ButtonsStyled } from "./style";

export function ButtonForm(){
  const { loading } = useContext(UserContext)
  const { excludeTechnology, selectedTech } = useContext(TechsContext)

  return (
    <ButtonsStyled>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Salvar Alterações"}
      </button>

      <button onClick={() => excludeTechnology(selectedTech.id)}>Excluir</button>
    </ButtonsStyled>
  )
}