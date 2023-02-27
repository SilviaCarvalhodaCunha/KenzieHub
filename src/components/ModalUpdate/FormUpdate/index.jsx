import React, { useContext } from "react";
import { Input } from "../../Input";
import { TechsContext } from "../../../contexts/TechsContext";
import { Select } from "../../ModalCreate/Select";
import { formSchemaCreate } from "../../ModalCreate/FormCreate/formSchema";
import { ButtonForm } from "../ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./style";


export function FormUpdate() {
  const { updateTechnology, selectedTech } = useContext(TechsContext);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaCreate),
  });

  const submit = (data) => {
    updateTechnology(selectedTech.id, data);
  };
    

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome do projeto"
        type="text"
        value={selectedTech.title}
        register={register("title")}
        error={errors.title}
      />

      <Select
        label="Status"
        register={register("status")}
        error={errors.status}
      />

      <ButtonForm/>
    </FormStyled>
  );
}
