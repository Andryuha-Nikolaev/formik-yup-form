import { Form } from "formik";
import s from "./FormWrapper.module.scss";
import { Button } from "@chakra-ui/react";
import { FormWrapperProps } from "../model/types";

export const FormWrapper = ({ children, title, buttonText = "Отправить" }: FormWrapperProps) => {
  return (
    <Form className={s.block}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.fields}>{children}</div>
      <Button className={s.button} type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};
