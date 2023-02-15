import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Input } from "../Input";
import { formSchemaLogin } from "./formSchemaLogin";
import { FormContainer } from "./style.js";
import { InputPassword } from "../Input/InputPassword";


export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [eyePassword, setEyePassword] = useState(false);

  const passwordVisibility = () => setEyePassword(!eyePassword);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  const navigate = useNavigate();

  const submit = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/sessions", data);

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      localStorage.setItem("@USER", JSON.stringify(response.data.user));

      toast.success("Login realizado com sucesso!");

      reset();

      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email}
      />

      <InputPassword
        passwordVisibility={passwordVisibility}
        eyePassword={eyePassword}
        label="Senha"
        type={eyePassword ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Entrar"}
      </button>
    </FormContainer>
  );
}
