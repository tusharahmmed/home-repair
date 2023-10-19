import LoginPage from "@/components/Login/Login";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Login | Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
