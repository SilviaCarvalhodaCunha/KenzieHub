import React from "react";
import { FieldsetStyled } from "./style";

export function Input({ label, type, placeholder, register, error, value}) {
   return (
      <FieldsetStyled>
         {label && <label htmlFor={register.name}>{label}</label>}
         <input type={type} id={register.name} placeholder={placeholder} value={value} {...register} />
         {error && <p>{error.message}</p>}
      </FieldsetStyled>
   );
};
