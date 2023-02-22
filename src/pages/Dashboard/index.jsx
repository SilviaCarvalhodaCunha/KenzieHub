import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { UserContext } from "../../contexts/UserContext";
import {
  HeaderContainer,
  HrStyled,
  MainContainer,
  SectionInformation,
  SectionProfile,
} from "./style";

export function Dashboard() {
  const { userLogout } = useContext(UserContext)

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

        <SectionInformation>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionInformation>
      </MainContainer>
    </>
  );
}
