"use client";

import {Avatar, Button, Dropdown, Layout, MenuProps, Row, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

import styles from "@/styles/ui/Header.module.css";
import Link from "next/link";
const {Header: AntHeader} = Layout;

const Header = () => {
  return (
    <header className={`section-padding ${styles.header}`}>
      <div className={styles.wraper}>
        <div className="w-[278px]">
          <Image src={logo} width={277} layout="responsive" alt="logo" />
        </div>
        <div className={styles.menuWraper}>
          <div className={styles.menuItems}>
            <Link href={"/"}>
              <p>HOME</p>
            </Link>
            <Link href={"/services"}>
              <p>SERVICES</p>
            </Link>
            <Link href={"/portfolio"}>
              <p>PORTFOLIO</p>
            </Link>
            <Link href={"/about"}>
              <p>About</p>
            </Link>
          </div>
          <Link href={"/login"}>
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
