import { InputProps } from "@chakra-ui/react";

export type FormikInputProps = InputProps & {
  name: string;
  label: string;
};
