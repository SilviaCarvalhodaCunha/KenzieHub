import * as yup from "yup";

export const formSchemaCreate = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
  status: yup.string().required("Seleção obrigatória"),
});