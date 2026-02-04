import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import ScrollablePosterRow from "@/components/scrollable-poster-row/ScrollablePosterRow";
import { MovieResult } from "@/types/Movie.type";
import { Typography } from "@mui/material";

interface Props {
  movies: MovieResult[];
}

const SimilarMoviesScrollableRow = ({ movies }: Props) => {
  if (movies.length === 0) {
    return (
      <Typography variant="body1">
        No hay películas similares disponibles.
      </Typography>
    );
  }

  const items: PageGridItem[] = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path,
    href: `/movies/${movie.id}`,
    overview: movie.overview,
  }));
  return <ScrollablePosterRow items={items} />;
};

export default SimilarMoviesScrollableRow;
