import AppContainer from "@/components/layout/AppContainer";
import { Stack } from "@mui/material";
import React from "react";
import BackdropImage from "./BackdropImage";
import styles from "./DetailsBackdrop.module.css";
import PosterImage from "./PosterImage";

interface Props {
  posterPath: string | null;
  backdropPath: string | null;
  children: React.ReactNode;
}

const DetailsBackdrop = ({ posterPath, backdropPath, children }: Props) => {
  return (
    <section className={styles.sectionContainer}>
      <AppContainer disableGutters={true}>
        <div className={styles.container}>
          <BackdropImage src={backdropPath} alt="Backdrop" />
          <Stack
            position="relative"
            flexDirection="row"
            gap={2}
            paddingX={{ xs: 2, md: 3 }}
            paddingY={8}
            zIndex={10}
          >
            <PosterImage src={posterPath} alt="Poster" />
            {children}
          </Stack>
        </div>
      </AppContainer>
    </section>
  );
};

export default DetailsBackdrop;
