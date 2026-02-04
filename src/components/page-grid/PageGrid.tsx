import styles from "./PageGrid.module.css";
import PageGridCard from "./PageGridCard";
import { PageGridItem } from "./PageGridItem.type";

interface Props {
  items: PageGridItem[];
}

const PageGrid = ({ items }: Props) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <PageGridCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PageGrid;
