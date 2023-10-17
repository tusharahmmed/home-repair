"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import {Button, Col, Row, message} from "antd";
import {useRouter} from "next/navigation";
import {SubmitHandler} from "react-hook-form";

const EditProfile = () => {
  const {data} = useGetProfileQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();

  const router = useRouter();

  const defaultValues = {
    name: data?.name,
    contactNo: data?.contactNo,
    address: data?.address,
  };

  const onSubmit: SubmitHandler<any> = async (values: any) => {
    const obj = {...values};
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    message.loading("updating.....");
    try {
      const res = await updateProfile(formData);
      if (!!res) {
        router.push("/profile");
        message.success("Profile updated Successfully");
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
            label: "profile",
            link: "/profile",
          },
        ]}
      />
      <ActionBar title="Edit Profile"> </ActionBar>
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
                span={24}
                style={{
                  marginBottom: "10px",
                }}>
                <Col span={8} style={{margin: "10px 0"}}>
                  <UploadImage defaultUrl={data?.profileImg} name="file" />
                </Col>
              </Col>
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
          </div>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
