import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  image: yup.string().optional(),
  categoryId: yup.string().required("category is required"),
});
