import Image from "next/image";
import HRSection from "../ui/HRSection";
import {HRButton} from "../ui";
import logo from "@/assets/images/service.png";
import styles from "@/styles/service/serviceDetails.module.css";
import HtmlParser from "../ui/HtmlParser";
import UMModal from "../ui/UMModal";
import {useState} from "react";
import Form from "../Forms/Form";
import {Avatar, Button, Col, Row, Space, message} from "antd";
import FormTextArea from "../Forms/FormTextArea";
import {SubmitHandler} from "react-hook-form";
import FormDatePicker from "../Forms/FormDatePicker";
import {UserOutlined} from "@ant-design/icons";
import FormTimePicker from "../Forms/FormTimePicker";
import {yupResolver} from "@hookform/resolvers/yup";
import {bookService} from "@/schemas/bookService";
import {useGetProfileQuery} from "@/redux/api/profileApi";
import {usePlaceOrderMutation} from "@/redux/api/orderApi";
import dayjs from "dayjs";
import FormRating from "../Forms/FormRating";
import {addReviw} from "@/schemas/addReview";
import {useAddReviewMutation} from "@/redux/api/reviewApi";

const ServiceDetails = ({service}: {service: any}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  // set default address
  const {data: profileData} = useGetProfileQuery(undefined);
  const defaultValues = {
    address: profileData?.address,
  };

  // book service
  const [placeOrder] = usePlaceOrderMutation();

  const onSubmit: SubmitHandler<any> = async (values: any) => {
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

  // review submit handler

  const [addReview] = useAddReviewMutation();

  const onReviwSubmit: SubmitHandler<any> = async (reviewData: any) => {
    reviewData.serviceId = service?.id;
    reviewData.rating = rating;

    message.loading("uploading.....");
    try {
      const res = await addReview(reviewData);
      if (!!res) {
        message.success("Success");
        setRating(0);

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
                  <HtmlParser content={service?.description || ""} />
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
        <div className="section-padding mx-16 mb-8">
          <h2 className="text-lg font-bold mb-4 border-b border-1">Reviews</h2>
          <div>
            {/* reviewItem  */}
            {service?.reviewAndRatings?.map((review: any) => (
              <div key={review.id} className="py-4">
                <Space
                  wrap
                  size={12}
                  style={{justifyContent: "flex-start", gap: "0px"}}>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <span className="ml-3">{review?.user?.name}</span>
                  <span className="ml-3">({review?.rating})</span>
                  <small className="font-thin ml-3">
                    {dayjs(review?.createdAt).format("MMM D, YYYY hh:mm A")}
                  </small>
                </Space>
                <p className="font-normal text-[14px] py-2 ml-10">
                  {review?.review}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-padding mx-16 mb-16">
          <h2 className="text-lg font-bold mb-4 border-b border-1">
            Leave a comment
          </h2>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <Form
              submitHandler={onReviwSubmit}
              resolver={yupResolver(addReviw)}>
              <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col
                  className="gutter-row"
                  span={16}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <div>
                    <FormRating
                      rating={rating}
                      setRating={setRating}
                      label="Rating"
                    />
                  </div>
                </Col>
                <Col span={8}></Col>
                <Col
                  className="gutter-row"
                  span={24}
                  style={{
                    marginBottom: "10px",
                  }}>
                  <FormTextArea name="review" label="Your Message" rows={4} />
                </Col>
              </Row>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
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
