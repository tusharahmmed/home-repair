"use client";

import {useState} from "react";
import {Alert, Button, Col, Row, message} from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import FormInput from "../Forms/FormInput";
import Form from "../Forms/Form";
import {SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {storeUserInfo} from "@/services/auth.service";
import Link from "next/link";
import {useRouter} from "next/navigation";

import FormTextArea from "../Forms/FormTextArea";
import {signupSchema} from "@/schemas/signUp";
import {useUserSignupMutation} from "@/redux/api/authApi";

type FormValues = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
};

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    setErrorMessage("");
    try {
      const res = await userSignup({...data}).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User created successfully!");
      }
      storeUserInfo({accessToken: res?.accessToken});
      // console.log(res);
    } catch (err: any) {
      setErrorMessage(err?.data?.message);
    }
  };

  const onClose = (e: any) => {};

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}>
        <Col sm={12} md={16} lg={10}>
          <Image src={loginImage} width={500} alt="login image" />
        </Col>
        <Col sm={12} md={8} lg={8}>
          {errorMessage && (
            <Alert
              message={errorMessage}
              type="error"
              closable
              onClose={onClose}
            />
          )}
          <h1
            style={{
              margin: "15px 0px",
              fontSize: "30px",
            }}>
            Sign up for create your account
          </h1>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
              <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormInput
                    name="name"
                    type="text"
                    size="large"
                    label="Full Name"
                    required
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormInput
                    name="contactNo"
                    type="text"
                    size="large"
                    label="Contact Number"
                    required
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    label="Email"
                    required
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="Password"
                  />
                </Col>

                <Col
                  className="gutter-row"
                  span={24}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormTextArea
                    name="address"
                    label="Present address"
                    rows={4}
                    required
                  />
                </Col>
              </Row>

              <Button style={{width: "100%"}} type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form>
          </div>
          <div style={{marginTop: "20PX"}}>
            <small>
              Already have an account?{" "}
              <Link href={"/login"}>
                <span style={{color: "blue"}}>Login here</span>
              </Link>
            </small>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Signup;
