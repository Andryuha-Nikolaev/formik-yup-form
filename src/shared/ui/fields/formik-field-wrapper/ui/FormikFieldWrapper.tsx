import { Field } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { FormikFieldWrapperProps } from "../model/types";

export const FormikFieldWrapper = ({ children, name, label }: FormikFieldWrapperProps) => {
  const [, meta] = useField(name);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <Field.Root invalid={!!error}>
      <Field.Label>{label}</Field.Label>
      {children}
      <Field.ErrorText>{error}</Field.ErrorText>
    </Field.Root>
  );
};
