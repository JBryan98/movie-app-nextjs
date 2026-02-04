import { Cast } from "@/types/Movie.type";
import { getCastImageUrl } from "@/utils/utils";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "./CastGrid.module.css";

interface Props {
  cast: Cast[];
}

const CastGrid = ({ cast }: Props) => {
  if (cast.length === 0) {
    return <Typography variant="body1">No hay actores disponibles.</Typography>;
  }
  return (
    <Grid container component={List}>
      {cast
        .filter((actor) => actor.known_for_department === "Acting")
        .map((actor, index) => (
          <Grid key={`${index}_${actor.id}`} size={{ xs: 12, md: 4, lg: 3 }}>
            <ListItem sx={{ paddingLeft: 0 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                <Image
                  src={getCastImageUrl(actor.profile_path, 300, actor.gender)}
                  width={150}
                  height={225}
                  alt={actor.name}
                  className={styles.actorImage}
                />
                <Box>
                  <Typography variant="body1" textAlign="right">
                    {actor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="right"
                    color="textSecondary"
                  >
                    {actor.character}
                  </Typography>
                </Box>
              </Stack>
            </ListItem>
            <Divider component="div" />
          </Grid>
        ))}
    </Grid>
  );
};

export default CastGrid;
