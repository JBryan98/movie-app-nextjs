import { Video } from "@/types/Movie.type";
import { Grid, Typography } from "@mui/material";
import styles from "./Video.module.css";

interface Props {
  videos: Video[];
}

const VideoGrid = ({ videos }: Props) => {
  if (videos.length === 0) {
    return <Typography variant="body1">No hay videos disponibles.</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {videos.map((video) => (
        <Grid key={video.id} size={{ xs: 12, md: 4, lg: 3 }}>
          <iframe
            width="100%"
            height="215"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={styles.videoItem}
          ></iframe>
          <Typography textAlign="center" variant="body1">
            {video.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoGrid;
