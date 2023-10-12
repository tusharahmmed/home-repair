import * as yup from "yup";

export const createUser = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  role: yup.string().required("role is required"),
  password: yup.string().min(6).max(32).required("password is requird"),
  contactNo: yup.string().optional(),
  address: yup.string().optional(),
});
