import { Field } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { FieldWrapperProps } from "../model/types";
import s from "./FieldWrapper.module.scss";

export const FieldWrapper = ({ children, name, label }: FieldWrapperProps) => {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <Field.Root invalid={!!error}>
      <Field.Label>{label}</Field.Label>
      {React.isValidElement(children) && React.cloneElement(children, { ...field })}
      <Field.ErrorText className={s.errorText}>{error}</Field.ErrorText>
    </Field.Root>
  );
};
