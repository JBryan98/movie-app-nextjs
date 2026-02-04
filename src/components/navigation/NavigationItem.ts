import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";

export type NavigationItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

export const navigationItems: NavigationItem[] = [
  {
    title: "Inicio",
    href: "/home",
    icon: HomeIcon,
  },
  {
    title: "Películas",
    href: "/movies",
    icon: TheatersIcon,
  },
  {
    title: "Series",
    href: "/series",
    icon: TvIcon,
  },
];
