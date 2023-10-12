import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  contactNo: yup.string().required("Contact number is required"),
  password: yup.string().min(6).max(32).required("password is requird"),
  address: yup.string().required("address number is required"),
});
