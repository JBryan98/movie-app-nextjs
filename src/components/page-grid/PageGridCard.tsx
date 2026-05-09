import { formatRating, getPosterImageUrl } from "@/utils/utils";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./PageGrid.module.css";
import { PageGridItem } from "./PageGridItem.type";
import RatingIcon from "../rating/RatingIcon";

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
        <div className={styles.ratingContainer}>
          <RatingIcon size={18} />
          <Typography variant="body2" className={styles.ratingText}>
            {formatRating(item.rating)}
          </Typography>
        </div>
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
