import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { RegisterForm } from "../../components/RegisterForm";
import { DivStyled, HeaderContainer, MainContainer } from "./style";

export function Register() {
  const navigate = useNavigate();
  const toGoBack = () => navigate(-1);

  return (
    <>
      <HeaderContainer>
        <div>
          <img src={logo} alt="logo" />
          <button onClick={toGoBack}>Voltar</button>
        </div>
      </HeaderContainer>

      <MainContainer>
        <DivStyled>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <RegisterForm />
        </DivStyled>
      </MainContainer>
    </>
  );
}
