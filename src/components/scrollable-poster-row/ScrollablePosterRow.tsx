import PageGridCard from "../page-grid/PageGridCard";
import { PageGridItem } from "../page-grid/PageGridItem.type";
import styles from "./ScrollablePosterRow.module.css";

interface Props {
  items: PageGridItem[];
}

const ScrollablePosterRow = ({ items }: Props) => {
  return (
    <div className={styles.scrollableRow}>
      {items.map((item) => (
        <PageGridCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ScrollablePosterRow;
