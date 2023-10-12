"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import {categoryScema} from "@/schemas/createCategory";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row, message} from "antd";
import {useRouter} from "next/navigation";

type IProps = {
  params: any;
};

const UpdateCategoryPage = ({params}: IProps) => {
  // get default values
  const {id} = params;

  const {data} = useCategoryQuery(id);

  const defaultValues = {
    title: data?.title,
  };

  // const [addDepartment] = useAddDepartmentMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    message.loading("updating.....");
    try {
      const res = await updateCategory({id, body: values});
      if (!!res) {
        message.success("Category updated Successfully");
        router.push("/admin/manage-category");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.data?.message);
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
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(categoryScema)}>
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
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateCategoryPage;
