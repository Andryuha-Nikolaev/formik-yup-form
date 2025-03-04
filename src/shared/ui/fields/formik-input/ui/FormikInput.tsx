import { FormikFieldWrapper } from "../../formik-field-wrapper";
import { Input } from "@chakra-ui/react";
import { useField } from "formik";
import { FormikInputProps } from "../model/types";

export const FormikInput = ({ name, label, ...props }: FormikInputProps) => {
  const [field] = useField(name);

  return (
    <FormikFieldWrapper name={name} label={label}>
      <Input {...props} {...field} />
    </FormikFieldWrapper>
  );
};
