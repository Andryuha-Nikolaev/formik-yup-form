"use client";

import { FieldNames } from "@/shared/config/fieldNames";
import { Radio } from "@/shared/ui/chakra/radio";
import { FormikCheckbox } from "@/shared/ui/fields/formik-checkbox";
import { FormikRadioGroup } from "@/shared/ui/fields/formik-radio-group";
import { FormikFormWrapper } from "@/shared/ui/form/formik-form-wrapper";
import { Stack } from "@chakra-ui/react";

import { Formik } from "formik";
import React from "react";

export const TestForm = () => {
  const initialValues = {
    [FieldNames.CHECKBOX]: false,
    [FieldNames.RADIO]: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikFormWrapper title="Чекбокс и радио">
          <FormikCheckbox name={FieldNames.CHECKBOX} label="Checkbox">
            Checkbox
          </FormikCheckbox>
          <FormikRadioGroup name={FieldNames.RADIO} label="Radio">
            <Stack>
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
            </Stack>
          </FormikRadioGroup>
        </FormikFormWrapper>
      </Formik>
    </>
  );
};
