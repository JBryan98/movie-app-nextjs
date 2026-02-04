import { getPosterImageUrl } from "@/utils/utils";
import Image from "next/image";
import styles from "./PosterImage.module.css";

interface Props {
  alt?: string;
  src: string | null;
}

const PosterImage = ({ alt, src }: Props) => {
  return (
    <Image
      src={getPosterImageUrl(src, 300)}
      alt={alt || "poster_image"}
      width={300}
      height={450}
      className={styles.poster}
    />
  );
};

export default PosterImage;
