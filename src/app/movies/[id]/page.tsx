import DetailsBackdrop from "@/components/backdrop/DetailsBackdrop";
import CastGrid from "@/components/cast/CastGrid";
import AppContainer from "@/components/layout/AppContainer";
import ReviewSection from "@/components/review/ReviewSection";
import VideoGrid from "@/components/video/VideoGrid";
import MovieDetails from "@/movies/details/MovieDetails";
import SimilarMoviesScrollableRow from "@/movies/details/SimilarMoviesScrollableRow";
import { getMovieDetails } from "@/services/movies.service";
import { Stack, Typography } from "@mui/material";

interface Props {
  params: Promise<{ id: number }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;
  const movieDetails = await getMovieDetails(id);
  return {
    title: movieDetails.title,
  };
};

const MovieDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const movieDetails = await getMovieDetails(id);

  return (
    <Stack gap={2}>
      <DetailsBackdrop
        backdropPath={movieDetails.backdrop_path}
        posterPath={movieDetails.poster_path}
      >
        <MovieDetails movie={movieDetails} />
      </DetailsBackdrop>
      <AppContainer>
        <Stack gap={2}>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom className="section-title">
              Películas similares
            </Typography>
            <SimilarMoviesScrollableRow
              movies={movieDetails.recommendations.results}
            />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom className="section-title">
              Reseñas
            </Typography>
            <ReviewSection reviews={movieDetails.reviews.results} />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom className="section-title">
              Videos
            </Typography>
            <VideoGrid videos={movieDetails.videos.results} />
          </section>
          <section>
            <Typography variant="h4" fontWeight="bold" gutterBottom className="section-title">
              Reparto
            </Typography>
            <CastGrid cast={movieDetails.credits.cast} />
          </section>
        </Stack>
      </AppContainer>
      <pre>
        <code>{JSON.stringify(movieDetails, null, 2)}</code>
      </pre>
    </Stack>
  );
};

export default MovieDetailsPage;
