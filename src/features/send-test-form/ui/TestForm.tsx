"use client";

import { Radio, RadioGroup } from "@/shared/ui/chakra/radio";
import { FormikCheckbox } from "@/shared/ui/fields/formik-checkbox";
import { FormikFormWrapper } from "@/shared/ui/form/formik-form-wrapper";
import { Stack } from "@chakra-ui/react";

import { Formik } from "formik";
import React from "react";

export const TestForm = () => {
  const initialValues = {
    checkbox: false,
    radio: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormikFormWrapper title="Чекбокс и радио">
          <FormikCheckbox name="checkbox" label="Checkbox">
            checkbox
          </FormikCheckbox>
          <RadioGroup>
            <Stack>
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3 Option 3 Option 3 Option 3 </Radio>
            </Stack>
          </RadioGroup>
        </FormikFormWrapper>
      </Formik>
    </>
  );
};
