"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import detailsImage from "@/assets/images/service.png";
import {Col, Row} from "antd";
import {useOrderDetailsQuery} from "@/redux/api/orderApi";
import Image from "next/image";
import dayjs from "dayjs";

const OrderDetailsPage = ({params}: {params: any}) => {
  const {id} = params;

  const {data} = useOrderDetailsQuery(id);

  const {user, service} = data || {};

  const base = "user";
  return (
    <div>
      <UMBreadCrumb
        items={[
          {label: `${base}`, link: `/${base}`},
          {label: "orders", link: `/${base}/manage-order`},
        ]}
      />
      <ActionBar title="Order Details" />
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
            <div>
              <Image
                alt="service"
                src={service?.image}
                height={200}
                width={200}
                layout="responsive"
              />
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                padding: "15px 0px",
              }}>
              <h2 className="text-lg font-bold mb-2">Servic Details</h2>
              <div>
                <div>Title: {service?.title}</div>
                <div>Category: {service?.category?.title}</div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">User Details</h2>
              <div>
                <div>Name: {user?.name}</div>
                <div>Email: {user?.email}</div>
                {user?.contactNo && <div>Phone: {user?.contactNo}</div>}
              </div>
            </div>
            <div
              style={{
                padding: "15px 0px",
              }}>
              <h2 className="text-lg font-bold mb-2">Booking Information</h2>
              <div>
                <div>
                  Visitng Date:{" "}
                  {dayjs(data?.visiting_date).format("MMM D, YYYY")}
                </div>
                <div>Visitng Hour: {data?.visiting_hour}</div>
                <div>Status: {data?.status}</div>
                <div>Address: {data?.address}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
