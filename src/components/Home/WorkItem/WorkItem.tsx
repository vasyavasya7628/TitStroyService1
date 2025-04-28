import styles from "@style/Home/workItem.module.scss";

type WorkItemProps = {
  number: number;
  text: string;
  min?: boolean;
};

export default function WorkItem({ number, text, min }: WorkItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.number}>{number}</div>
      <div
        className={min ? `${styles.text} ${styles.min}` : styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
