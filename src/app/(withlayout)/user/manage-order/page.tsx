"use client";
import {
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import {Button, Col, Input, Row, message} from "antd";
import Link from "next/link";
import {useState} from "react";
import ActionBar from "@/components/ui/ActionBar";
import {useDebounced} from "@/redux/hooks";
import dayjs from "dayjs";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";
import Image from "next/image";
import {useDeleteOrderMutation, useOrdersQuery} from "@/redux/api/orderApi";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteOrder] = useDeleteOrderMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const {data, isLoading} = useOrdersQuery({...query});

  const orders = data?.orders;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      //   console.log(data);
      await deleteOrder(id);
      message.success("Order Deleted successfully");
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err?.data?.message);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: function (data: any) {
        return (
          <Image
            src={"/assets/images/favicon.png"}
            height={20}
            width={30}
            alt="thumb"
          />
        );
      },
    },
    {
      title: "Title",
      dataIndex: "service",
      render: function (data: any) {
        return data?.title;
      },
      sorter: true,
    },
    {
      title: "Category",
      dataIndex: "service",
      render: function (data: any) {
        return data?.category?.title;
      },
      sorter: true,
    },
    {
      title: "Visting Date",
      dataIndex: "visiting_date",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY");
      },
      sorter: true,
    },
    {
      title: "Visting Time",
      dataIndex: "visiting_hour",
      // render: function (data: any) {
      //   return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      // },
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/user/manage-order/details/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/user/manage-order/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                // onClick={() => console.log(data)}
                type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const {order, field} = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />

      <ActionBar title="Order List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{margin: "0px 5px"}}>
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={orders}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
