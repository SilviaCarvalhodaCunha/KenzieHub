import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg"

export function Dashboard() {
  const localStorageUser = JSON.parse(localStorage.getItem("@USER"));
  const user = localStorageUser.name;
  const module = localStorageUser.course_module; 
  return (
    <>
      <header>
          <img src={logo} alt="logo" />
          <Link to="/" onClick={() => localStorage.clear()}>Sair</Link>
      </header>

      <main>
        <section>
          <h2>Olá, {user}</h2>
          <p>{module}</p>
        </section>
        <section>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </section>
      </main>
    </>
  );
}
