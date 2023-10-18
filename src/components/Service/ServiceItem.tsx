import Image from "next/image";
import styles from "@/styles/service/serviceItem.module.css";
import Link from "next/link";
import {IService} from "@/types";

type IProps = {
  details: IService;
};
const ServiceItem = ({details}: IProps) => {
  return (
    <Link href={`/services/details/${details?.id}`}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={details?.image}
          height={200}
          width={200}
          alt={"service"}
          layout="responsive"
        />
        <div className={styles.info}>
          <h2>{details?.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
