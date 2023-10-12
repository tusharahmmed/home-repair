import * as yup from "yup";

export const changePasswordSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
});
