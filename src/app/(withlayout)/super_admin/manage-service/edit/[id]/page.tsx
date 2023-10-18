"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import RCCategoryField from "@/components/Forms/RCCategoryField";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import {serviceSchema} from "@/schemas/createService";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row, message} from "antd";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const FormDescriptionEditor = dynamic(
  () => import("@/components/Forms/FormDescriptionEditor"),
  {
    ssr: false,
  }
);

const EditServicePage = ({params}: {params: any}) => {
  const {id} = params;

  const [editorData, setEditorData] = useState();
  const [updateService] = useUpdateServiceMutation();

  const {data} = useServiceQuery(id);

  const defaultValues = {
    title: data?.title,
    categoryId: data?.categoryId,
  };

  useEffect(() => {
    setEditorData(data?.description);
  }, [data]);

  const router = useRouter();

  const onSubmit = async (values: any) => {
    values.description = editorData;
    const obj = {...values};
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);

    message.loading("Updating.....");
    try {
      await updateService({id: id, body: formData});
      message.success("Service updated successfully");
      router.push("/super_admin/manage-service");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err?.data?.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {label: `${base}`, link: `/${base}`},
          {label: "service", link: `/${base}/manage-service`},
        ]}
      />
      <ActionBar title="Update Service" />
      <div>
        <Form
          defaultValues={defaultValues}
          submitHandler={onSubmit}
          resolver={yupResolver(serviceSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <Row gutter={{xs: 24, xl: 8, lg: 8, md: 24}}>
              <Col
                className="gutter-row"
                span={4}
                style={{
                  marginBottom: "10px",
                }}>
                <UploadImage defaultUrl={data?.image} name="file" />
              </Col>
              <Col span={12} style={{margin: "10px 0"}}>
                <FormInput name="title" label="Title" />
              </Col>
              <Col span={8} style={{margin: "10px 0"}}>
                <RCCategoryField name="categoryId" label="Category" />
              </Col>
              <Col span={24} style={{margin: "10px 0"}}>
                <FormDescriptionEditor
                  label="Desciption"
                  editorData={editorData}
                  setEditorData={setEditorData}
                />
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditServicePage;
