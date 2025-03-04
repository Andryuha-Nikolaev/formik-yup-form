"use client";

import { FieldNames } from "@/shared/config/fieldNames";
import { FieldWrapper } from "@/shared/ui/form/field-wrapper";
import { FormWrapper } from "@/shared/ui/form/form-wrapper";
import { Input } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  [FieldNames.NAME]: Yup.string().required("Название объекта обязательно для заполнения"),
});

type ValidationSchemaType = Yup.InferType<typeof validationSchema>;

export const RealEstateForm = () => {
  const initialValues: ValidationSchemaType = {
    [FieldNames.NAME]: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormWrapper title="Объект недвижимости">
          <FieldWrapper name={FieldNames.NAME} label="Название объекта *">
            <Input />
          </FieldWrapper>
        </FormWrapper>
      </Formik>
    </>
  );
};
