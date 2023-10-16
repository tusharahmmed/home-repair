"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTimePicker from "@/components/Forms/FormTimePicker";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {orderOptions} from "@/constants/global";
import {
  useOrderDetailsQuery,
  useUpdateOrderMutation,
} from "@/redux/api/orderApi";
import {Button, Col, Row, message} from "antd";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const UpdateOrderPage = ({params}: {params: any}) => {
  const {id} = params;

  const [editorData, setEditorData] = useState();
  const [updateOrder] = useUpdateOrderMutation();

  const {data} = useOrderDetailsQuery(id);

  const defaultValues = {
    visiting_date: data?.visiting_date,
    visiting_hour: data?.visiting_hour,
    status: data?.status,
  };

  useEffect(() => {
    setEditorData(data?.description);
  }, [data]);

  const router = useRouter();

  const onSubmit = async (values: any) => {
    values.description = editorData;

    message.loading("Updating.....");
    try {
      await updateOrder({id: id, body: values});
      message.success("Order updated successfully");
      router.push("/admin/manage-order");
    } catch (err: any) {
      // console.error(err.message);
      message.error(err?.data?.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {label: `${base}`, link: `/${base}`},
          {label: "order", link: `/${base}/manage-order`},
        ]}
      />
      <ActionBar title="Update Order" />
      <div>
        <Form defaultValues={defaultValues} submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <Row gutter={{xs: 24, xl: 8, lg: 8, md: 24}}>
              <Col span={8} style={{margin: "10px 0"}}>
                <div>
                  <FormDatePicker
                    name="visiting_date"
                    label="Visiting Data"
                    size="large"
                  />
                </div>
              </Col>
              <Col span={8} style={{margin: "10px 0"}}>
                <div>
                  <FormTimePicker
                    name={`visiting_hour`}
                    label="Visiting Hour"
                  />
                </div>
              </Col>
              <Col span={8} style={{margin: "10px 0"}}>
                <FormSelectField
                  size="large"
                  name="status"
                  options={orderOptions}
                  label="Role"
                  placeholder="Select"
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

export default UpdateOrderPage;
