"use client";

import {useGetProfileQuery} from "@/redux/api/profileApi";
import {Avatar, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import Link from "next/link";

const ProfilePage = () => {
  const {data} = useGetProfileQuery(undefined);

  const {name, email, address, contactNo} = data || {};

  return (
    <>
      <div>
        <h1 className="text-2xl mb-[10px]">Profile</h1>
      </div>
      <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <Link href={"/profile/edit"}>
            <Button type="primary">Edit</Button>
          </Link>
        </div>
        <div className="flex flex-col items-center pb-10">
          {/* <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        /> */}
          <Avatar
            style={{width: "4rem", height: "4rem", fontSize: "3rem"}}
            icon={<UserOutlined />}
          />
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
