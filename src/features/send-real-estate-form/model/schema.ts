import { FieldNames } from "@/shared/config/fieldNames";
import Yup from "@/shared/config/yup";

export const validationSchema = Yup.object().shape({
  [FieldNames.NAME]: Yup.string().required(),
  [FieldNames.ADDRESS]: Yup.string().required(),
  [FieldNames.FLOOR]: Yup.number()
    .integer()
    .min(-1)
    .test("max-floor", function (value) {
      const { path, parent, createError } = this;
      const totalFloorsValue = parent[FieldNames.TOTAL_FLOORS];

      if (typeof value !== "number" || isNaN(value)) return true;
      if (typeof totalFloorsValue !== "number" || isNaN(totalFloorsValue)) return true;

      if (value > totalFloorsValue) {
        return createError({
          path,
          message: `Значение не может быть больше ${totalFloorsValue}`,
        });
      }
      return true;
    })
    .required(),
  [FieldNames.TOTAL_FLOORS]: Yup.number().integer().min(3).max(200).required(),
  [FieldNames.SQUARE]: Yup.number()
    .integer()
    .min(0)
    .max(400)
    .moreThanSumOfFields(
      [FieldNames.LIVING_SQUARE, FieldNames.KITCHEN_SQUARE],
      "Общая площадь должна быть больше суммы жилой площади и площади кухни"
    )
    .required(),
  [FieldNames.LIVING_SQUARE]: Yup.number().integer().min(0).required(),
  [FieldNames.KITCHEN_SQUARE]: Yup.number()
    .transform(
      (value, originalValue) => (originalValue === "" ? undefined : value) // Преобразование пустой строки
    )
    .integer()
    .min(0)
    .required(),
});

export type ValidationSchemaType = Yup.InferType<typeof validationSchema>;
