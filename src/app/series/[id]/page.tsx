import DetailsBackdrop from "@/components/backdrop/DetailsBackdrop";
import CastGrid from "@/components/cast/CastGrid";
import AppContainer from "@/components/layout/AppContainer";
import ReviewSection from "@/components/review/ReviewSection";
import VideoGrid from "@/components/video/VideoGrid";
import SerieDetails from "@/series/details/SerieDetails";
import SimilarSeriesScrollableRow from "@/series/details/SimilarSeriesScrollableRow";
import { getSerieDetails } from "@/services/series.service";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  params: Promise<{ id: number }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const serieDetails = await getSerieDetails(id);
  return {
    title: serieDetails.name,
  };
};

const SerieDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const serieDetails = await getSerieDetails(id);
  return (
    <Box>
      <DetailsBackdrop
        backdropPath={serieDetails.backdrop_path}
        posterPath={serieDetails.poster_path}
      >
        <SerieDetails serie={serieDetails} />
      </DetailsBackdrop>
      <AppContainer>
        <Stack gap={2} paddingTop={2}>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Recomendaciones
            </Typography>
            <SimilarSeriesScrollableRow
              series={serieDetails.recommendations.results}
            />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Reseñas
            </Typography>
            <ReviewSection reviews={serieDetails.reviews.results} />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Videos
            </Typography>
            <VideoGrid videos={serieDetails.videos.results} />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Reparto
            </Typography>
            <CastGrid cast={serieDetails.credits.cast} />
          </section>
        </Stack>
      </AppContainer>
      <pre>
        <code>{JSON.stringify(serieDetails, null, 2)}</code>
      </pre>
    </Box>
  );
};

export default SerieDetailsPage;
