import SidebarFilter from "@/components/filter/SidebarFilter";
import { getMovieListGenres } from "@/services/genres.service";
import MovieFilterForm from "./MovieFilterForm";

const MovieFilterSection = async () => {
  const data = await getMovieListGenres();
  return (
    <SidebarFilter>
      <MovieFilterForm genres={data.genres} />
    </SidebarFilter>
  );
};

export default MovieFilterSection;
