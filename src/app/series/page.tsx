import AppContainer from "@/components/layout/AppContainer";
import Search from "@/components/search/Search";
import SeriesFilterSection from "@/series/filter/SeriesFilterSection";
import SeriesGridPaginated from "@/series/Grid/SeriesGridPaginated";
import { getDiscoverSeries, searchSeries } from "@/services/series.service";
import { Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export const metadata: Metadata = {
  title: "Series",
};

const SeriesPage = async ({ searchParams }: Props) => {
  const qParams = await searchParams;
  return (
    <AppContainer sx={{paddingTop: 2}}>
      <Typography variant="h4" gutterBottom>
        Explorar series:
      </Typography>
      <Grid container mb={2} spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Suspense fallback={<div>Cargando filtros...</div>}>
            <SeriesFilterSection />
          </Suspense>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Search
            type="series"
            searchService={searchSeries}
            placeholder="Buscar series"
          />
        </Grid>
      </Grid>
      <SeriesGridPaginated filters={qParams} service={getDiscoverSeries} />
    </AppContainer>
  );
};

export default SeriesPage;
