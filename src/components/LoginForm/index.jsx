import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { formSchemaLogin } from "./formSchemaLogin";
import { FormContainer } from "./style.js";
import { InputPassword } from "../Input/InputPassword";
import { UserContext } from "../../contexts/UserContext";


export function LoginForm() {
  const { userLogin, loading } = useContext(UserContext)

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


  const submit = (data) => {
    userLogin(data)
    
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
