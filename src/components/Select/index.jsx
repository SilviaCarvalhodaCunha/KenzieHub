import React from "react";

export function Select({ label, register, error }) {
  return (
    <fieldset>
      <label htmlFor={register.name}>{label}</label>
      <select name={register.name} {...register}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
      </select>
      {error && <p>{error.message}</p>}
    </fieldset>
  )
}