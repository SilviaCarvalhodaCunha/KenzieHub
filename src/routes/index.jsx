import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { Register } from "../pages/Register";

export function AppRoutes() {
  return (
  <Routes>
    <Route path="/" element={ <Login/> } />
    <Route path="register" element={ <Register /> } />

    <Route path="dashboard" element={ <ProtectedRoutes /> } >
      <Route index element={ <Dashboard />} />
    </Route>
  </Routes>
  )
}
