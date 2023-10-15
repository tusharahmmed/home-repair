import Image from "next/image";
import HRSection from "../ui/HRSection";
import {HRButton} from "../ui";
import logo from "@/assets/images/service.png";
import styles from "@/styles/service/serviceDetails.module.css";
import {IService} from "@/types";
import HtmlParser from "../ui/HtmlParser";

const ServiceDetails = ({service}: {service: IService}) => {
  return (
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
            <HRButton title="REQUEST FOR THIS SERVICE " />
          </div>
        </div>
      </HRSection>
    </div>
  );
};

export default ServiceDetails;
