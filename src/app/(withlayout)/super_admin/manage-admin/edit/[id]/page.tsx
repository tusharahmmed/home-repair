"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {roleOptionForSuperAdmin} from "@/constants/global";
import {useUpdateUserMutation, useUserQuery} from "@/redux/api/userApi";

import {Button, Col, Row, message} from "antd";
import {useRouter} from "next/navigation";
import {SubmitHandler} from "react-hook-form";

type IProps = {
  params: any;
};

const EditUser = ({params}: IProps) => {
  const {id} = params;

  // get details
  const {data} = useUserQuery(id);

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    contactNo: data?.contactNo,
    address: data?.address,
    role: data?.role,
  };

  const [updateUser] = useUpdateUserMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (values: any) => {
    message.loading("updating.....");
    try {
      const res = await updateUser({id, body: values});
      if (!!res) {
        message.success("User updated Successfully");
        router.push("/super_admin/manage-admin");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.data?.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-admin",
            link: "/super_admin/manage-admin",
          },
        ]}
      />
      <ActionBar title="Update User"> </ActionBar>
      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
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
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="New Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormSelectField
                  size="large"
                  name="role"
                  options={roleOptionForSuperAdmin}
                  label="Role"
                  placeholder="Select"
                />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{
                  marginBottom: "10px",
                }}>
                <FormTextArea name="address" label="Present address" rows={4} />
              </Col>
            </Row>
          </div>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
