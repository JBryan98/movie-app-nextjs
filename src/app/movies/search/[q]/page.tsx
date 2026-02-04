import AppContainer from "@/components/layout/AppContainer";
import Search from "@/components/search/Search";
import MoviesGridPaginated from "@/movies/grid/MoviesGridPaginated";
import { searchMovies } from "@/services/movies.service";
import { Grid, Typography } from "@mui/material";

interface Props {
  params: Promise<{ q: string }>;
  searchParams: Promise<Record<string, string>>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { q } = await params;
  return {
    title: `Buscar '${q}'`,
  };
};

const MoviesSearchPage = async ({ params, searchParams }: Props) => {
  const { q } = await params;
  const filters = await searchParams;
  filters.query = q;
  return (
    <AppContainer sx={{ paddingTop: 2 }}>
      <Grid container mb={2} spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>
            Resultados de búsqueda para: "{q}"
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Search
            type="movies"
            searchService={searchMovies}
            placeholder="Buscar películas"
          />
        </Grid>
      </Grid>
      <MoviesGridPaginated filters={filters} service={searchMovies} />
    </AppContainer>
  );
};

export default MoviesSearchPage;
