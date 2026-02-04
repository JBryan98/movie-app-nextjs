import { CONFIG } from "@/constants/config";
import { Skeleton, Stack } from "@mui/material";
import styles from "./PageGrid.module.css";

const PageGridSkeleton = () => {
  return (
    <Stack flexDirection="column">
      <div className={styles.gridContainer}>
        {Array.from({ length: CONFIG.PAGE_SIZE }).map((_, index) => (
          <div key={index} className={styles.carouselCard}>
            <Skeleton variant="rectangular" height={300} />
            <Skeleton />
            <Skeleton width="75%" />
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default PageGridSkeleton;
