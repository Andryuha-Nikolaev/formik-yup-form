import { Field } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { FieldWrapperProps } from "../model/types";

export const FieldWrapper = ({ children, name, label }: FieldWrapperProps) => {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <Field.Root invalid={!!error}>
      <Field.Label>{label}</Field.Label>
      {React.isValidElement(children) && React.cloneElement(children, { ...field })}
      <Field.ErrorText style={{ position: "absolute", top: "calc(100% + 2px)", lineHeight: 1.1 }}>
        {error}
      </Field.ErrorText>
    </Field.Root>
  );
};
