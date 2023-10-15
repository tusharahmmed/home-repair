"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";

import styles from "@/styles/ui/Header.module.css";
import Link from "next/link";
import {isLoggedIn} from "@/services/auth.service";
import {HRButton} from ".";

const Header = () => {
  const user = isLoggedIn();

  return (
    <header className={`section-padding ${styles.header}`}>
      <div className={styles.wraper}>
        <div className="w-[278px]">
          <Image src={logo} width={277} layout="responsive" alt="logo" />
        </div>
        <div className={styles.menuWraper}>
          <div className={styles.menuItems}>
            <Link href={"/home"}>
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

          {/* {user ? (
            <Link href={"/profile"}>
              <HRButton animate={false} title="dashboard" />
            </Link>
          ) : (
            <Link href={"./login"}>
              <HRButton animate={false} title="login" />
            </Link>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
