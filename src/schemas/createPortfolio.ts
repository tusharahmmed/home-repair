import * as yup from "yup";

export const portfolioSchema = yup.object().shape({
  client: yup.string().required("Clinet is required"),
  location: yup.string().required("Location is required"),
  year: yup.string().required("Year is required"),
  categoryId: yup.string().required("category is required"),
});
