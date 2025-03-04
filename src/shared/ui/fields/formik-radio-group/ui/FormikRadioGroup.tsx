import React from "react";
import { FormikRadioGroupProps } from "../model/types";
import { useField, useFormikContext } from "formik";
import { RadioGroup } from "@/shared/ui/chakra/radio";
import { FormikFieldWrapper } from "../../formik-field-wrapper";

export const FormikRadioGroup = ({ children, name, label }: FormikRadioGroupProps) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <FormikFieldWrapper name={name} label={label}>
      {" "}
      <RadioGroup value={field.value} onValueChange={(e) => setFieldValue(name, e.value)}>
        {children}
      </RadioGroup>
    </FormikFieldWrapper>
  );
};
