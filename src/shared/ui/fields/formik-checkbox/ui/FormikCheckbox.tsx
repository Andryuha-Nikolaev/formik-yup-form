import React from "react";
import { Checkbox } from "@/shared/ui/chakra/checkbox";
import { useField, useFormikContext } from "formik";
import { FormikFieldWrapper } from "../../formik-field-wrapper";
import { FormikCheckboxProps } from "../model/types";

export const FormikCheckbox = ({ children, name, label }: FormikCheckboxProps) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <FormikFieldWrapper name={name} label={label}>
      <Checkbox checked={field.value} onCheckedChange={(e) => setFieldValue(name, !!e.checked)}>
        {children}
      </Checkbox>
    </FormikFieldWrapper>
  );
};
