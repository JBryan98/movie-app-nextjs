import AppContainer from "@/components/layout/AppContainer";
import Search from "@/components/search/Search";
import MovieFilterSection from "@/movies/filter/MovieFilterSection";
import MoviesGridPaginated from "@/movies/grid/MoviesGridPaginated";
import { getDiscoverMovies, searchMovies } from "@/services/movies.service";
import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export const metadata: Metadata = {
  title: "Películas",
};

const MoviesPage = async ({ searchParams }: Props) => {
  const filters = await searchParams;
  return (
    <AppContainer sx={{paddingTop: 2}}>
      <Typography variant="h4" gutterBottom>
        Explorar películas:
      </Typography>
      <Grid container mb={2} spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Suspense fallback={<div>Cargando filtros...</div>}>
            <MovieFilterSection />
          </Suspense>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Search type="movies" searchService={searchMovies} />
        </Grid>
      </Grid>
      <MoviesGridPaginated filters={filters} service={getDiscoverMovies} />
    </AppContainer>
  );
};

export default MoviesPage;
