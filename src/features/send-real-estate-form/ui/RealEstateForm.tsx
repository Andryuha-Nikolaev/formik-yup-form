"use client";

import { FieldNames } from "@/shared/config/fieldNames";
import { FormikInput } from "@/shared/ui/fields/formik-input";
import { FormikFormWrapper } from "@/shared/ui/form/formik-form-wrapper";
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
        <FormikFormWrapper title="Объект недвижимости">
          <FormikInput name={FieldNames.NAME} label="Название объекта *" />
        </FormikFormWrapper>
      </Formik>
    </>
  );
};
