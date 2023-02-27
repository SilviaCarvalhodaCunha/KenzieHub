import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../Input";
import { Select } from "./Select";
import { formSchema } from "./formSchema";
import { FormStyled } from "./style";
import { UserContext } from "../../contexts/UserContext";

export function RegisterForm() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = (data) => {
    userRegister(data);

    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        error={errors.name}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password}
      />

      <Input
        label="Confirmar de Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        error={errors.bio}
      />

      <Input
        label="Contato"
        type="text"
        placeholder="Opções de contato"
        register={register("contact")}
        error={errors.contact}
      />

      <Select
        label="Selecionar Módulo"
        register={register("course_module")}
        error={errors.course_module}
      />

      <button type="submit">Cadastrar</button>
    </FormStyled>
  );
}
