import { Container, Typography } from "@mui/material";

export default function EmptyPage({ message }: { message: string }) {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="primary" sx={{ fontSize: "3rem", fontWeight: 600 }}>
        {message}
      </Typography>
    </Container>
  );
}
