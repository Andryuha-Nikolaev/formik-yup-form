"use client";

import { FieldNames } from "@/shared/config/fieldNames";
import { FieldWrapper } from "@/shared/ui/form/field-wrapper";
import { FormWrapper } from "@/shared/ui/form/form-wrapper";
import { Input } from "@chakra-ui/react";
import { Formik } from "formik";
import { validationSchema } from "../model/schema";

export const RealEstateForm = () => {
  const initialValues = {
    [FieldNames.NAME]: "",
    [FieldNames.ADDRESS]: "",
    [FieldNames.FLOOR]: "",
    [FieldNames.TOTAL_FLOORS]: "",
    [FieldNames.SQUARE]: "",
    [FieldNames.LIVING_SQUARE]: "",
    [FieldNames.KITCHEN_SQUARE]: "",
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
        validateOnBlur={false}
        validateOnChange={false}
      >
        <FormWrapper title="Объект недвижимости">
          <FieldWrapper name={FieldNames.NAME} label="Название объекта *">
            <Input />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.ADDRESS} label="Адрес *">
            <Input />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.FLOOR} label="Этаж *">
            <Input type="number" />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.TOTAL_FLOORS} label="Количество этажей в доме *">
            <Input type="number" />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.SQUARE} label="Площадь *">
            <Input type="number" />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.LIVING_SQUARE} label="Жилая площадь *">
            <Input type="number" />
          </FieldWrapper>
          <FieldWrapper name={FieldNames.KITCHEN_SQUARE} label="Площадь кухни *">
            <Input type="number" />
          </FieldWrapper>
        </FormWrapper>
      </Formik>
    </>
  );
};
