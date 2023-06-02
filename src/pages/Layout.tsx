import { Box } from "@mui/material";
import AsideBar from "../components/AsideBar";
import TopBar from "../components/TopBar";

export default function Layout() {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
        <Box sx={{ display: "flex", width: "16%" }}>
          <AsideBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#F3F5F7",
          }}
        >
          <TopBar />
        </Box>
      </Box>
    </>
  );
}
