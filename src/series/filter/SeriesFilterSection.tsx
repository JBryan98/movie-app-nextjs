import { getSeriesListGenres } from "@/services/genres.service";
import React from "react";
import SerieFilterForm from "./SerieFilterForm";
import { getSeriesStatuses } from "@/services/status.service";
import SidebarFilter from "@/components/filter/SidebarFilter";

const SeriesFilterSection = async () => {
  const genresList = await getSeriesListGenres();
  const statuses = getSeriesStatuses();
  return (
    <SidebarFilter>
      <SerieFilterForm genres={genresList.genres} statuses={statuses} />
    </SidebarFilter>
  );
};

export default SeriesFilterSection;
