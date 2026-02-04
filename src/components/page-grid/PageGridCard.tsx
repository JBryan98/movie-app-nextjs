import { getPosterImageUrl } from "@/utils/utils";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./PageGrid.module.css";
import { PageGridItem } from "./PageGridItem.type";

interface Props {
  item: PageGridItem;
}

const PageGridCard = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      <Link href={item.href} className={styles.cardImgContainer}>
        <Image
          src={getPosterImageUrl(item.posterPath, 300)}
          alt={item.title}
          width={300}
          height={500}
          className={styles.cardImg}
        />
      </Link>
      <Link href={item.href}>
        <Typography variant="body1" className={styles.cardTitle}>
          {item.title}
        </Typography>
      </Link>
    </div>
  );
};

export default PageGridCard;
