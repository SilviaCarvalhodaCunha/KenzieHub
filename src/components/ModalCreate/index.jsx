import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FormCreate } from "./FormCreate";
import { ContainerModal, ModalStyled } from "./style";

export function ModalCreate() {
  const { setModal } = useContext(UserContext);

  return (
    <ModalStyled>
      <ContainerModal>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <FormCreate />
      </ContainerModal>
    </ModalStyled>
  );
}
