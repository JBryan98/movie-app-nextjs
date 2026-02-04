import { getBackdropImageUrl } from "@/utils/utils";
import Image from "next/image";
import styles from "./DetailsBackdrop.module.css";

interface Props {
  alt?: string;
  src: string | null;
}

const BackdropImage = ({ alt, src }: Props) => {
  return (
    <div className={styles.backdropContainer}>
      <div className={styles.backdrop}></div>
      {src && (
        <Image
          src={getBackdropImageUrl(src)}
          alt={alt || "backdrop_image"}
          width={1500}
          height={570}
          priority
          className={styles.backdropImage}
        />
      )}
    </div>
  );
};

export default BackdropImage;
