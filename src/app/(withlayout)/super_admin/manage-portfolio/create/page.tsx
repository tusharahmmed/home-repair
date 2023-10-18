"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormYearPicker from "@/components/Forms/FormYearPicker";
import RCCategoryField from "@/components/Forms/RCCategoryField";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {useAddPortfolioMutation} from "@/redux/api/portfolioApi";
import {useAddServiceMutation} from "@/redux/api/serviceApi";
import {portfolioSchema} from "@/schemas/createPortfolio";
import {serviceSchema} from "@/schemas/createService";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row, message} from "antd";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useState} from "react";

const FormDescriptionEditor = dynamic(
  () => import("@/components/Forms/FormDescriptionEditor"),
  {
    ssr: false,
  }
);

const CreateServicePage = () => {
  const [editorData, setEditorData] = useState("");
  const [addPortfolio] = useAddPortfolioMutation();

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
    message.loading("Creating.....");
    try {
      await addPortfolio(formData);
      message.success("Portfolio created successfully");
      router.push("/super_admin/manage-portfolio");
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
          {label: "portfolio", link: `/${base}/manage-portfolio`},
        ]}
      />
      <ActionBar title="Create Portfolio" />
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(portfolioSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <Row gutter={{xs: 24, xl: 8, lg: 8, md: 24}}>
              <Col span={6} style={{margin: "10px 0"}}>
                <FormInput name="client" label="Client" />
              </Col>
              <Col span={6} style={{margin: "10px 0"}}>
                <RCCategoryField name="categoryId" label="Category" />
              </Col>
              <Col span={6} style={{margin: "10px 0"}}>
                <FormInput name="location" label="Location" />
              </Col>
              <Col span={6} style={{margin: "10px 0"}}>
                <FormYearPicker name="year" label="Year" picker="year" />
              </Col>
              <Col
                className="gutter-row"
                span={4}
                style={{
                  marginBottom: "10px",
                }}>
                <UploadImage name="file" />
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
              add
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
