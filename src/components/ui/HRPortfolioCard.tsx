import Image from "next/image";
import portfolio from "@/assets/images/portfolio.png";
import styles from "@/styles/ui/HRPrortfolioCard.module.css";
import {SearchOutlined} from "@ant-design/icons";
import {HRButton} from ".";
import {IPortfolio} from "@/types";
import Link from "next/link";

const HRPortfolioCard = ({details}: {details: IPortfolio}) => {
  return (
    <div className="">
      <a>
        <div className={styles.portfolioContent}>
          {details?.image ? (
            <Image
              height={200}
              width={200}
              alt="portfolio"
              layout="responsive"
              src={details?.image}
            />
          ) : (
            <Image
              height={200}
              width={200}
              alt="portfolio"
              // layout="responsive"
              src={portfolio}
            />
          )}
          <div className={styles.portfolioInfo}>
            <Link href={`portfolios/details/${details?.id}`}>
              <HRButton animate={false} title="visit" />
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default HRPortfolioCard;
