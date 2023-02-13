import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Input } from "../Input";
import { formSchemaLogin } from "./formSchemaLogin"

export function LoginForm() {
  const [ user, setUser] = useState([])

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(formSchemaLogin)
  })

  const navigate = useNavigate();

  const submit = async(data) => {
    try {
      const response = await api.post('/sessions', data)

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      localStorage.setItem("@USER", JSON.stringify(response.data.user))
      
      setUser([response.data.user])
      
      toast.success("Login realizado com sucesso!")

      reset();

      navigate("/dashboard")
      
    } catch (error) {

      console.log(error)

      toast.error("Email ou senha inválidos")
      
    }
  }


  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Email" type="email" placeholder="Digite aqui seu email" register={register("email")} error={errors.email} />

      <Input label="Senha" type="password" placeholder="Digite aqui sua senha" register={register("password")} error={errors.password} />

      <button type="submit">Entrar</button>
    </form>
  )
}