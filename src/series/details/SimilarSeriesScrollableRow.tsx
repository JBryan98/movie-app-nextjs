import { PageGridItem } from "@/components/page-grid/PageGridItem.type";
import ScrollablePosterRow from "@/components/scrollable-poster-row/ScrollablePosterRow";
import { SerieResult } from "@/types/Serie.type";
import { Typography } from "@mui/material";

interface Props {
  series: SerieResult[];
}

const SimilarSeriesScrollableRow = ({ series }: Props) => {
  if (series.length === 0) {
    return <Typography>No hay series similares disponibles.</Typography>;
  }

  const items: PageGridItem[] = series.map((serie) => ({
    id: serie.id,
    title: serie.name,
    posterPath: serie.poster_path,
    overview: serie.overview,
    href: `/series/${serie.id}`,
  }));

  return <ScrollablePosterRow items={items} />;
};

export default SimilarSeriesScrollableRow;
