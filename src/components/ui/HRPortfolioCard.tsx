import Image from "next/image";
import portfolio from "@/assets/images/portfolio.png";
import styles from "@/styles/ui/HRPrortfolioCard.module.css";
import {SearchOutlined} from "@ant-design/icons";
import {HRButton} from ".";

const HRPortfolioCard = () => {
  return (
    <div className="">
      <a>
        <div className={styles.portfolioContent}>
          <Image
            height={200}
            width={200}
            alt="portfolio"
            // layout="responsive"
            src={portfolio}
          />
          <div className={styles.portfolioInfo}>
            <HRButton animate={false} title="visit" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default HRPortfolioCard;
