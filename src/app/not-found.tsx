import ErrorContainer from "@/components/layout/ErrorContainer";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <ErrorContainer>
      <Typography variant="h4" gutterBottom>
        Página no encontrada
      </Typography>
      <div>
        <Image
          src="/404.svg"
          alt="Página no encontrada"
          width={300}
          height={300}
        />
      </div>
      <Button variant="contained" LinkComponent={Link} href="/">
        Volver al inicio
      </Button>
    </ErrorContainer>
  );
};

export default NotFound;
