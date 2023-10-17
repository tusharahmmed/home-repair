"use client";

import {useGetProfileQuery} from "@/redux/api/profileApi";
import {Avatar, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import Link from "next/link";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import Image from "next/image";

const ProfilePage = () => {
  const {data} = useGetProfileQuery(undefined);

  const {name, email, address, contactNo, profileImg} = data || {};

  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: "profile",
            link: "/profile",
          },
        ]}
      />
      <ActionBar title="Profile"> </ActionBar>
      <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <Link href={"/profile/edit"}>
            <Button type="primary">Edit</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center pb-10">
          {profileImg ? (
            <Image src={profileImg} alt="profile" height={100} width={100} />
          ) : (
            <Avatar
              style={{width: "4rem", height: "4rem", fontSize: "3rem"}}
              icon={<UserOutlined />}
            />
          )}
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Name: {name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Email: {email}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Phone: {contactNo}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Address: {address}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
