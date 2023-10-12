import styles from "@/styles/ui/index.module.css";

export const HRButton = ({
  title,
  animate = true,
}: {
  title: string;
  animate?: boolean;
}) => {
  if (animate) {
    return <button className={styles.umButton}>{title}</button>;
  }
  return <button className={styles.umButtonWithoutAnimate}>{title}</button>;
};
