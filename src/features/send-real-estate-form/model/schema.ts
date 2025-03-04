import { FieldNames } from "@/shared/config/fieldNames";
import Yup from "@/shared/config/yup";

export const validationSchema = Yup.object().shape({
  [FieldNames.NAME]: Yup.string().required(),
  [FieldNames.ADDRESS]: Yup.string().required(),
  [FieldNames.FLOOR]: Yup.number()
    .integer()
    .min(-1)
    .max(Yup.ref(FieldNames.TOTAL_FLOORS), "Значение не может быть меньше количества этажей в доме")
    .required(),
  [FieldNames.TOTAL_FLOORS]: Yup.number().integer().min(3).max(200).required(),
  [FieldNames.SQUARE]: Yup.number()
    .integer()
    .min(0)
    .max(400)
    .test(
      "is-greater-than-sum",
      "Общая площадь должна быть больше суммы жилой площади и площади кухни",
      function (value) {
        const { livingSquare, kitchenSquare } = this.parent;
        return Number(value) > Number(livingSquare) + Number(kitchenSquare);
      }
    )
    .required(),
  [FieldNames.LIVING_SQUARE]: Yup.number().integer().min(0).required(),
  [FieldNames.KITCHEN_SQUARE]: Yup.number().integer().min(0).required(),
});
