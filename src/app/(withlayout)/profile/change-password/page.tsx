"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {useUpdateProfileMutation} from "@/redux/api/profileApi";
import {changePasswordSchema} from "@/schemas/changePassword";
import {yupResolver} from "@hookform/resolvers/yup";

import {Button, Col, Row, message} from "antd";

const ChangePassword = () => {
  const [updateProfile] = useUpdateProfileMutation();

  const onSubmit = async (data: any) => {
    message.loading("updating.....");
    try {
      // console.log(data);
      const res = await updateProfile(data);
      if (!!res) {
        message.success("Password changed Successfully");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.data?.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <h1 className="text-2xl">Change Password</h1>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(changePasswordSchema)}>
        <Row gutter={{xs: 24, xl: 8, lg: 8, md: 24}}>
          <Col span={8} style={{margin: "10px 0"}}>
            <FormInput name="password" label="Password" required />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
