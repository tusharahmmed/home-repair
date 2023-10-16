import Image from "next/image";
import HRSection from "../ui/HRSection";
import {HRButton} from "../ui";
import logo from "@/assets/images/service.png";
import styles from "@/styles/service/serviceDetails.module.css";
import {IService} from "@/types";
import HtmlParser from "../ui/HtmlParser";
import UMModal from "../ui/UMModal";
import {useState} from "react";
import Form from "../Forms/Form";
import {Button, Col, Row, message} from "antd";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";
import {SubmitHandler} from "react-hook-form";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import FormTimePicker from "../Forms/FormTimePicker";
import {yupResolver} from "@hookform/resolvers/yup";
import {bookService} from "@/schemas/bookService";
import {useGetProfileQuery} from "@/redux/api/profileApi";
import {usePlaceOrderMutation} from "@/redux/api/orderApi";

const ServiceDetails = ({service}: {service: IService}) => {
  const [open, setOpen] = useState<boolean>(false);

  // set default address
  const {data: profileData} = useGetProfileQuery(undefined);
  const defaultValues = {
    address: profileData?.address,
  };

  // book service
  const [placeOrder] = usePlaceOrderMutation();

  const onSubmit: SubmitHandler<any> = async (values: any) => {
    console.log(values);
    values.serviceId = service?.id;

    message.loading("booking.....");
    try {
      const res = await placeOrder(values);
      if (!!res) {
        message.success("service booked Successfully");
        // router.push("/admin/manage-user");
      }
    } catch (err: any) {
      console.error(err.message);
      message.error(err?.data?.message);
    }
  };

  return (
    <>
      <div>
        <HRSection title={service?.title}>
          <div className={styles.container}>
            <div className={styles.leftSection}>
              <div className={styles.imageWraper}>
                <Image
                  src={logo}
                  height={200}
                  width={200}
                  layout="responsive"
                  alt="service"
                />
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.descriptionWraper}>
                <div>
                  <HtmlParser content={service?.description} />
                </div>
              </div>
              <HRButton
                onClick={() => {
                  setOpen(true);
                  // setAdminId(data);
                }}
                title="REQUEST FOR THIS SERVICE "
              />
            </div>
          </div>
        </HRSection>
      </div>

      <UMModal
        title="Remove admin"
        isOpen={open}
        showCancelButton={false}
        showOkButton={false}
        closeModal={() => setOpen(false)}
        handleOk={() => {}}>
        <div>
          <Form
            defaultValues={defaultValues}
            submitHandler={onSubmit}
            resolver={yupResolver(bookService)}>
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
                  span={16}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <div>
                    <FormDatePicker
                      name="visiting_date"
                      label="Visitin Data"
                      size="large"
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <FormTimePicker
                      name={`visiting_hour`}
                      label="Visiting Hour"
                    />
                  </div>
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
                  />
                </Col>
              </Row>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}>
              <div>
                <Button
                  onClick={() => setOpen(false)}
                  type="primary"
                  htmlType="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </UMModal>
    </>
  );
};

export default ServiceDetails;
