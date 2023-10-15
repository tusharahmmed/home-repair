import * as yup from "yup";

export const bookService = yup.object().shape({
  visiting_date: yup.object().required("visiting date is required"),
  visiting_hour: yup.string().required("visiting hour is required"),
  address: yup.string().required("address is required"),
});
