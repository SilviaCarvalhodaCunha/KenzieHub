import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import { LoginForm } from "../../components/LoginForm";


export function Login(){
    

    return (
        <>
        <header>
            <img src={logo} alt="logo" />
        </header>
        
        <main>
            <div>
                <h2>Login</h2>
                <LoginForm />
                <p>Ainda não possui uma conta?</p>
                <Link to="/register">Cadastre-se</Link>
            </div>
        </main>
        </>
    )
}