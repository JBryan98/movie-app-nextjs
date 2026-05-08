import { Genre } from "@/types/Genre";
import { Stack } from "@mui/material";
import React from "react";
import GenreChip from "./GenreChip";

interface Props {
  type: "movie" | "tv";
  genres: Genre[];
}

const GenreChips = ({ type, genres }: Props) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" marginBottom={"12px"}>
      {genres.map((genre) => (
        <GenreChip key={genre.id} type={type} genre={genre} />
      ))}
    </Stack>
  );
};

export default GenreChips;
