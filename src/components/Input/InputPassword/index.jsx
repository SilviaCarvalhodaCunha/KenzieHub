import React from "react";
import { RxEyeOpen, RxEyeClosed } from "react-icons/Rx";
import { DivPassword, FieldsetStyled } from "./style";

export function InputPassword({
  passwordVisibility,
  eyePassword,
  label,
  type,
  placeholder,
  register,
  error
}) {
  return (
    <FieldsetStyled>
      {label && <label htmlFor={register.name}>{label}</label>}
      <DivPassword>
        <input
          type={type}
          id={register.name}
          placeholder={placeholder}
          {...register}
        />
        {eyePassword ? (
          <RxEyeOpen size={20} onClick={passwordVisibility} />
        ) : (
          <RxEyeClosed size={20} onClick={passwordVisibility} />
        )}
      </DivPassword>
      {error && <p>{error.message}</p>}
    </FieldsetStyled>
  );
}
