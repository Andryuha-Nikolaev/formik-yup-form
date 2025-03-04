"use client";

import { FieldNames } from "@/shared/config/fieldNames";
import { Checkbox } from "@/shared/ui/chakra/checkbox";
import { Radio, RadioGroup } from "@/shared/ui/chakra/radio";
import { FieldWrapper } from "@/shared/ui/form/field-wrapper";
import { FormWrapper } from "@/shared/ui/form/form-wrapper";
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrapper title="Чекбокс и радио">
        <FieldWrapper name={FieldNames.CHECKBOX} label="Checkbox">
          <Checkbox>Checkbox</Checkbox>
        </FieldWrapper>
        <FieldWrapper name={FieldNames.RADIO} label="Radio">
          <RadioGroup>
            <Stack>
              <Radio value="1">Option 1</Radio>
              <Radio value="2">Option 2</Radio>
              <Radio value="3">Option 3</Radio>
            </Stack>
          </RadioGroup>
        </FieldWrapper>
      </FormWrapper>
    </Formik>
  );
};
