import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Поле обязательно для заполнения",
  },
  number: {
    min: "Значение не может быть меньше ${min}",
    max: "Значение не может быть больше ${max}",
    integer: "Значение должно быть целым числом",
  },
});

declare module "yup" {
  interface NumberSchema {
    moreThanSumOfFields(fields: string[], message?: string): this;
  }
}

Yup.addMethod(Yup.number, "moreThanSumOfFields", function (fields: string[], message: string) {
  return this.test("more-than-sum", message, function (value) {
    const { path, parent, createError } = this;

    if (typeof value !== "number" || isNaN(value)) return true;

    const sum = fields.reduce((acc, field) => acc + (Number(parent?.[field]) || 0), 0);

    return value > sum || createError({ path, message });
  });
});

export default Yup;
