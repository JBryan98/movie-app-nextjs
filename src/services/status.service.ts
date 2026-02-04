export type Status = {
  id: number;
  name: string;
};

export const getSeriesStatuses = () => {
  return [
    { id: 0, name: "Returning Series" },
    { id: 1, name: "Planned" },
    { id: 2, name: "In Production" },
    { id: 3, name: "Ended" },
    { id: 4, name: "Canceled" },
    { id: 5, name: "Pilot" },
  ];
};

export const getMovieStatuses = () => {
  return [];
};
