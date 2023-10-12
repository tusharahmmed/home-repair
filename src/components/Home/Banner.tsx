import styles from "@/styles/home/banner.module.css";
import {HRButton} from "../ui";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* <Image src={banner} width={600} layout="responsive" alt="" height={500} /> */}
      <div className={styles.info}>
        <h2> One Stop Repair, Renovation & Interior Solution in Bangladesh </h2>
        <p>
          Let Our Professional Team
          <br /> renovate & fix your dream place
          <br /> today
        </p>
        <HRButton title="Request Free Consultation" />
      </div>
    </div>
  );
};

export default Banner;
