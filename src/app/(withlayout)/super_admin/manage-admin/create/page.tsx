"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormMultiSelectField from "@/components/Forms/FormMultiSelectField";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  adminPermissionOptions,
  roleOptionForSuperAdmin,
} from "@/constants/global";
import {useAddNewUserMutation} from "@/redux/api/userApi";

import {createUser} from "@/schemas/creatUser";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row, message} from "antd";
import {useRouter} from "next/navigation";
import {SubmitHandler} from "react-hook-form";

const CreatUser = () => {
  const [addNewUser] = useAddNewUserMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    message.loading("creating.....");
    try {
      const res = await addNewUser(data);
      if (!!res) {
        message.success("User created Successfully");
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
      <ActionBar title="Create New Admin"> </ActionBar>
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(createUser)}>
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
                span={8}
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
                span={8}
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
                <FormMultiSelectField
                  name="permissions"
                  label="Permissions"
                  size="large"
                  placeholder="Select"
                  options={adminPermissionOptions}
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
                  required
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
                  label="Password"
                  required
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
                  required={true}
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
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreatUser;
