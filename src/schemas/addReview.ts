import * as yup from "yup";

export const addReviw = yup.object().shape({
  review: yup.string().required("Message is required"),
});
