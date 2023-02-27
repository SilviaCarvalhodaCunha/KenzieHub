import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FormUpdate } from "./FormUpdate";
import { ButtonClose, ContainerModal, ModalStyled } from "./styled";

export function ModalUpdate(){
  const { setModalUp } = useContext(UserContext)

  return(
    <ModalStyled>
      <ContainerModal>
        <div>
          <h2>Tecnologia Detalhes</h2>
          <ButtonClose onClick={() => setModalUp(false)}>X</ButtonClose>
        </div>
        <FormUpdate/>
      </ContainerModal>
    </ModalStyled>    
  )
}