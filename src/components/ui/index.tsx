import styles from "@/styles/ui/index.module.css";

export const HRButton = ({
  title,
  animate = true,
  onClick,
}: {
  title: string;
  animate?: boolean;
  onClick?: any;
}) => {
  if (animate) {
    return (
      <button onClick={onClick} className={styles.umButton}>
        {title}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={styles.umButtonWithoutAnimate}>
      {title}
    </button>
  );
};
