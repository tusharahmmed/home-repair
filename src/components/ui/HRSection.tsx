import styles from "@/styles/ui/HRSection.module.css";
import {HRButton} from "@/components/ui";

const HRSection = ({
  children,
  title,
  background,
  button,
  link,
}: {
  children: React.ReactNode;
  title: string;
  background?: boolean;
  button?: boolean;
  link?: string;
}) => {
  return (
    <section className={`${styles.section} ${background && styles.sectionBg}`}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
      </div>
      <div className="section-padding">{children}</div>
      {button && (
        <div className={styles.btnWrpaer}>
          <HRButton title="Explore all our projects" />
        </div>
      )}
    </section>
  );
};

export default HRSection;
