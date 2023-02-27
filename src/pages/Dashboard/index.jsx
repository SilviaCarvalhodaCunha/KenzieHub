import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";
import {
  DivSection,
  HeaderContainer,
  HrStyled,
  MainContainer,
  SectionProfile,
  SectionTechnology,
} from "./style";
import button from "../../assets/Button Plus.svg";
import { Technology } from "../../components/Technology";
import { ModalCreate } from "../../components/ModalCreate";

export function Dashboard() {
  const { userLogout } = useContext(UserContext);
  const { modal, setModal } = useContext(UserContext)

  const localStorageUser = JSON.parse(localStorage.getItem("@USER"));
  const user = localStorageUser.name;
  const module = localStorageUser.course_module;
  
  return (
    <>
      <HeaderContainer>
        <div>
          <img src={logo} alt="logo" />
          <Link to="/" onClick={() => userLogout()}>
            Sair
          </Link>
        </div>
      </HeaderContainer>

      <HrStyled />

      <MainContainer>
        <SectionProfile>
          <h2>Olá, {user}</h2>
          <p>{module}</p>
        </SectionProfile>

        <HrStyled />

        <SectionTechnology>
          <DivSection>
            <h2>Tecnologias</h2>
            <button onClick={() => setModal(true)}>
              <img src={button} />
            </button>
            {modal && <ModalCreate/>}
          </DivSection>
          <Technology />
        </SectionTechnology>
      </MainContainer>
    </>
  );
}
