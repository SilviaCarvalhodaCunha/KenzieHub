import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { RegisterForm } from "../../components/RegisterForm";

export function Register() {
  const navigate = useNavigate();
  const toGoBack = () => navigate(-1);

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <button onClick={toGoBack}>Voltar</button>
      </header>

      <main>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <RegisterForm />
      </main>
    </>
  );
}
