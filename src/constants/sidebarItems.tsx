"use client";
import type {MenuProps} from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  UsergroupAddOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import {USER_ROLE} from "./role";
import {IUser, USER_PERMISSION} from "@/types";
export const sidebarItems = (role: string, userData: IUser) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/profile/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Service Management",
      key: "service-managemnt",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-category`}>Categories</Link>,
          key: `/${role}/manage-category`,
        },
        {
          label: <Link href={`/${role}/manage-service`}>Services</Link>,
          key: `/${role}/manage-services`,
        },
      ],
    },
    {
      label: (
        <Link href={`/${role}/manage-portfolio`}>Portfoli Management</Link>
      ),
      icon: <BlockOutlined />,
      key: `/${role}/manage-portfolio`,
    },
    {
      label: <Link href={`/${role}/manage-order`}>Manage Orders</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-order`,
    },
  ];

  const adminPermissionSidebarItems: MenuProps["items"] = [];

  // check permissions
  if (
    userData?.permissions?.includes(USER_PERMISSION.category) &&
    userData?.permissions?.includes(USER_PERMISSION.service)
  ) {
    adminPermissionSidebarItems.push({
      label: "Service Management",
      key: "service-managemnt",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-category`}>Categories</Link>,
          key: `/${role}/manage-category`,
        },
        {
          label: <Link href={`/${role}/manage-service`}>Services</Link>,
          key: `/${role}/manage-services`,
        },
      ],
    });
  } else if (userData?.permissions?.includes(USER_PERMISSION.category)) {
    adminPermissionSidebarItems.push({
      label: "Service Management",
      key: "service-managemnt",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-category`}>Categories</Link>,
          key: `/${role}/manage-category`,
        },
      ],
    });
  } else if (userData?.permissions?.includes(USER_PERMISSION.service)) {
    adminPermissionSidebarItems.push({
      label: "Service Management",
      key: "service-managemnt",
      icon: <AppstoreAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-service`}>Services</Link>,
          key: `/${role}/manage-services`,
        },
      ],
    });
  } else {
  }

  if (userData?.permissions?.includes(USER_PERMISSION.portfolio)) {
    adminPermissionSidebarItems.push({
      label: (
        <Link href={`/${role}/manage-portfolio`}>Portfoli Management</Link>
      ),
      icon: <BlockOutlined />,
      key: `/${role}/manage-portfolio`,
    });
  }

  if (userData?.permissions?.includes(USER_PERMISSION.order)) {
    adminPermissionSidebarItems.push({
      label: <Link href={`/${role}/manage-order`}>Manage Orders</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-order`,
    });
  }

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/${role}/manage-user`,
    },

    ...adminPermissionSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/${role}/admin`,
    },
    ...commonAdminSidebarItems,
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/manage-order`}>My Orders</Link>,
      icon: <TableOutlined />,
      key: `/${role}/orders`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
