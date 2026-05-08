import { Genre } from "@/types/Genre";
import { Chip, Typography } from "@mui/material";
import Link from "next/link";

interface GenreChipProps {
  type: "movie" | "tv";
  genre: Genre;
}

const GenreChip = ({ type, genre }: GenreChipProps) => {
  const href =
    type === "movie"
      ? `/movies?with_genres=${genre.id}`
      : `/series?with_genres=${genre.id}`;
  return (
    <Chip
      component={Link}
      href={href}
      label={
        <Typography variant="body2" color="textPrimary">
          {genre.name}
        </Typography>
      }
      sx={{
        // This color comes from mui palette primary.dark but in RGBA format
        backgroundColor: "rgba(66, 165, 245, 0.4)",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(66, 165, 245, 1)",
        },
      }}
    ></Chip>
  );
};

export default GenreChip;
