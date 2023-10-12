import * as yup from "yup";

export const categoryScema = yup.object().shape({
  title: yup.string().required("Title is required"),
});
