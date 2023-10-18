import Image from "next/image";
import HRSection from "../ui/HRSection";
import {HRButton} from "../ui";
import logo from "@/assets/images/service.png";
import styles from "@/styles/service/serviceDetails.module.css";
import HtmlParser from "../ui/HtmlParser";
import {IPortfolio} from "@/types";
import Link from "next/link";

const PortfolioDetails = ({portfolio}: {portfolio: IPortfolio}) => {
  return (
    <>
      <div>
        <HRSection title={portfolio?.category?.title}>
          <div className={styles.container}>
            <div className={styles.leftSection}>
              <div className={styles.imageWraper}>
                <Image
                  src={portfolio?.image}
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
                  <HtmlParser content={portfolio?.description || ""} />
                </div>
              </div>
              <div>
                <h3>Client: {portfolio?.client}</h3>
                <h3>Location: {portfolio?.location}</h3>
                <h3>Year: {portfolio?.year}</h3>
                <h3>Category: {portfolio?.category?.title}</h3>
              </div>
              <Link href={"/services"}>
                <HRButton title="REQUEST FOR THIS SERVICE " />
              </Link>
            </div>
          </div>
        </HRSection>
      </div>
    </>
  );
};

export default PortfolioDetails;
