import { Form } from "formik";
import s from "./FormikFormWrapper.module.scss";
import { Button } from "@chakra-ui/react";

type FormikFormWrapperProps = {
  children: React.ReactNode;
  title: string;
  buttonText?: string;
};

export const FormikFormWrapper = ({
  children,
  title,
  buttonText = "Отправить",
}: FormikFormWrapperProps) => {
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
