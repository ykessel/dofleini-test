import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="primary" sx={{ fontSize: "3rem", fontWeight: 600 }}>
        Oops!
      </Typography>
      <Typography color="primary" sx={{ fontSize: "2rem", fontWeight: 500 }}>
        Lo sentimos, ha ocurrido un error inesperado.
      </Typography>
      <Typography color="primary" sx={{ fontSize: "1rem", fontWeight: 400 }}>
        {error.statusText || error.message}
      </Typography>
    </Container>
  );
}
