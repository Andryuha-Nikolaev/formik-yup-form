"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { FormikFormWrapper } from "@/shared/ui/form/formik-form-wrapper";
import { Stack } from "@chakra-ui/react";

import { Formik } from "formik";
import React from "react";

export const TestForm: React.FC = () => {
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
          <Checkbox name="agree">agree</Checkbox>
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
