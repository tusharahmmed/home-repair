/* eslint-disable react/no-unescaped-entities */
"use client";
import {Alert, Button, Col, Input, Row, message} from "antd";
import loginImage from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {SubmitHandler} from "react-hook-form";
import {useUserLoginMutation} from "@/redux/api/authApi";
import {storeUserInfo} from "@/services/auth.service";
import {useRouter} from "next/navigation";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/schemas/login";
import Link from "next/link";
import {useState} from "react";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    setErrorMessage("");
    try {
      const res = await userLogin({...data}).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User logged in successfully!");
      }
      storeUserInfo({accessToken: res?.accessToken});
      // console.log(res);
    } catch (err: any) {
      setErrorMessage(err?.data?.message);
    }
  };

  const onClose = (e: any) => {};
  return (
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
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                label="User Email"
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                required
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
        <div style={{marginTop: "20PX"}}>
          <small>
            Don't have any account?
            <Link href={"/sign-up"}>
              <span style={{color: "blue"}}> Sing up here</span>
            </Link>
          </small>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
