import styles from "@/styles/ui/HRWorkCard.module.css";

type IProps = {
  title: string;
  items: string[];
};

const HRWorkCard = ({title, items}: IProps) => {
  return (
    <div className={styles.serviceItem}>
      <h3>{title}</h3>
      {items?.map((item, i) => {
        return (
          <p key={i}>
            <span style={{color: "var(--text-light)", font: "500"}}>→</span>{" "}
            {item}{" "}
          </p>
        );
      })}
    </div>
  );
};

export default HRWorkCard;
