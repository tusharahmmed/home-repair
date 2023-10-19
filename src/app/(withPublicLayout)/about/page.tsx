import Image from "next/image";
import logo from "@/assets/images/ceo.jpg";
import styles from "@/styles/service/serviceDetails.module.css";

import HRSection from "@/components/ui/HRSection";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "About | Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};

const AboutPage = () => {
  return (
    <>
      <div>
        <HRSection title={"Message From CEO"}>
          <div style={{gap: "20px"}} className={styles.container}>
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
            <div
              style={{
                background: "#f5f6f7",
                padding: "10px 20px",
                color: "rgb(61, 60, 60)",
              }}
              className={styles.rightSection}>
              <div className={styles.descriptionWraper}>
                <p>
                  Home Repair (BD) ltd is the pioneer in Repair, Renovation and
                  Maintenance Company in Bangladesh since 2014.
                  <br /> We are providing more than 16 services to make your
                  living or working area more comfortable, high-quality also
                  contemporary within your directives and with our skilled team
                  of 40.
                  <br /> Our service touches every corner of home; from entry
                  door to electric switch, master bed interior to wash room
                  remolding as well as cabinet to corridor. Till today we have
                  served pleasingly more than 850 clients with 2300 diverse
                  services in and out of Dhaka. We are happy to be connected
                  with our valuable clients for there requirement; a simple door
                  locks repair to interior or home remodeling.
                  <br /> We also provide free consultancy and automated
                  estimation for repair/renovation/maintenance of your home
                  which helps you to assume the overheads. Feel free to contact
                  with us for your better living.
                  <br />
                  <br />
                  Engr. Md. CEO Baker Sarker B. Sc. Engg. (Civil) MIEB
                  ceo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </HRSection>
      </div>
    </>
  );
};

export default AboutPage;
