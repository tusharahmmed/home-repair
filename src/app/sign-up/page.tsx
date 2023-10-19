import Signup from "@/components/Signup/Signup";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sign Up | Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};
const SignupPage = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default SignupPage;
