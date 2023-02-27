import React from "react";
import { FieldsetStyled } from "../../RegisterForm/Select/style";

export function Select({ label, register, error }) {
  return (
    <FieldsetStyled>
      <label htmlFor={register.name}>{label}</label>
      <select name={register.name} {...register}>
        <option value="Iniciante">
          Iniciante
        </option>
        <option value="Intermediário">
          Intermediário
        </option>
        <option value="Avançado">
          Avançado
        </option>
      </select>
      {error && <p>{error.message}</p>}
    </FieldsetStyled>
  )
}