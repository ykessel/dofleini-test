import { AppBar, Box, Toolbar, Paper, Stack, Avatar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import BasicBreadcrumbs from "./Breadcrumbs";
import { Notifications, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <BasicBreadcrumbs />
          </Box>
          <Stack sx={{ alignItems: 'center', gap: 1 }} direction="row" spacing={1}>
            <Typography>EN</Typography>
            <Notifications />
            <Settings />
            <Avatar sx={{ width: 36, height: 36 }} src="https://randomuser.me/api/portraits/med/women/60.jpg" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Paper sx={{ display: 'flex', flexGrow: 1, m: "1rem", height: "85%" }}>
      <Outlet></Outlet>
      </Paper>
    </Box>
  );
}
