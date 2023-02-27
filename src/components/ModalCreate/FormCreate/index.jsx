import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../contexts/TechsContext";
import { UserContext } from "../../../contexts/UserContext";
import { Input } from "../../Input";
import { Select } from "../Select";
import { formSchemaCreate } from "./formSchema";
import { FormStyled } from "./style";

export function FormCreate() {
  const { registerTechnology } = useContext(TechsContext);
  const { loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaCreate),
  });

  const submit = (data) => {
    registerTechnology(data);
    
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite o nome da tecnologia"
        register={register("title")}
        error={errors.title}
      />

      <Select
        label="Selecionar status"
        register={register("status")}
        error={errors.status}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Cadastrar Tecnologia"}
      </button>
    </FormStyled>
  );
}
