import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import { LoginForm } from "../../components/LoginForm";
import { DivStyled, HeaderContainer, MainContainer } from "./style";


export function Login(){
    

    return (
        <>
        <HeaderContainer>
            <img src={logo} alt="logo" />
        </HeaderContainer>
        
        <MainContainer>
            <DivStyled>
                <h2>Login</h2>
                <LoginForm />
                <p>Ainda não possui uma conta?</p>
                <Link to="/register">Cadastre-se</Link>
            </DivStyled>
        </MainContainer>
        </>
    )
}