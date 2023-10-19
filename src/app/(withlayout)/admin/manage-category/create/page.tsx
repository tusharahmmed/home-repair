"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {useAddCategoryMutation} from "@/redux/api/categoryApi";
import {categoryScema} from "@/schemas/createCategory";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row, message} from "antd";

const CreateCategoryPage = () => {
  const [addCategory] = useAddCategoryMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      await addCategory(data);
      message.success("Category created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {label: `${base}`, link: `/${base}`},
          {label: "category", link: `/${base}/manage-category`},
        ]}
      />
      <ActionBar title="Create Category" />
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(categoryScema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <Row gutter={{xs: 24, xl: 8, lg: 8, md: 24}}>
              <Col span={8} style={{margin: "10px 0"}}>
                <FormInput name="title" label="Title" />
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

export default CreateCategoryPage;
