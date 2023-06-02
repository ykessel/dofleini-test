import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as UsuariosIcon } from "../assets/users.svg";
import { ReactComponent as RolesIcon } from "../assets/roles.svg";
import { ReactComponent as TrazasIcon } from "../assets/trazas.svg";
import { ReactComponent as AuditoriasIcon } from "../assets/audi.svg";
import { ReactComponent as ExpedientesIcon } from "../assets/suitcase.svg";
import { ReactComponent as TrabajadoresIcon } from "../assets/audi.svg";
import { ReactComponent as ProcesoIcon } from "../assets/procesos.svg";
import logo from "../assets/logo.svg";

const NavButton = styled(Button)({
  width: "100%",
  justifyContent: "flex-start",
  gap: ".4rem",
  textTransform: "none",
  transitionDuration: "0.5s",
  "&:hover": {
    background: "#4F2D80",
    color: "#fff",
  },
});

export default function AsideBar() {
  const { pathname } = useLocation();

  const currentActiveStyle = (route: string) => {
    return pathname === route
      ? {
          background: "#4F2D80",
          color: "#fff",
        }
      : {};
  };

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box sx={{ width: "100%", marginTop: "2rem", marginBottom: "1rem" }}>
        <img src={logo} style={{ width: "9.5rem" }} />
      </Box>
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#CBC7CF", marginBottom: 1 }}
        >
          SEGURIDAD
        </Typography>
        <Stack direction="column" spacing={1}>
          <NavLink to="usuarios">
            <NavButton
              variant="text"
              sx={() => currentActiveStyle("/usuarios")}
            >
              <SvgIcon>
              <UsuariosIcon />
              </SvgIcon>
              Usuarios
            </NavButton>
          </NavLink>
          <NavLink to="roles">
            <NavButton variant="text" sx={() => currentActiveStyle("/roles")}>
               <SvgIcon> 
              <RolesIcon />
                </SvgIcon>
              Roles
            </NavButton>
          </NavLink>
          <NavLink to="trazas">
            <NavButton variant="text" sx={() => currentActiveStyle("/trazas")}>
            <SvgIcon>
              <TrazasIcon />
                </SvgIcon>
              Trazas
            </NavButton>
          </NavLink>
          <NavLink to="auditorias">
            <NavButton
              variant="text"
              sx={() => currentActiveStyle("/auditorias")}
            >
              <SvgIcon>
                
              <AuditoriasIcon />
                </SvgIcon>
              Auditorias
            </NavButton>
          </NavLink>
        </Stack>
      </Box>

      <Box sx={{ width: "100%", marginBottom: 3 }}>
        <Typography
          variant="h6"
          component="div"
          color='secondary'
          sx={{ flexGrow: 1, color: "#CBC7CF", marginBottom: 1 }}
        >
          RRHH
        </Typography>
        <Stack direction="column" spacing={1}>
          <NavLink to="expedientes">
            <NavButton
              variant="text"
              sx={() => currentActiveStyle("/expedientes")}
            >
              <SvgIcon>
              <ExpedientesIcon />
                </SvgIcon>
              Expedientes
            </NavButton>
          </NavLink>
          <NavLink to="trabajadores">
            <NavButton
              variant="text"
              sx={() => currentActiveStyle("/trabajadores")}
            >
              <SvgIcon>
              <TrabajadoresIcon />
                </SvgIcon>
              Trabajadores
            </NavButton>
          </NavLink>
          <NavLink to="procesos">
            <NavButton
              variant="text"
              sx={() => currentActiveStyle("/procesos")}
            >
              <SvgIcon>
                <ProcesoIcon />
              </SvgIcon>
              Procesos
            </NavButton>
          </NavLink>
        </Stack>
      </Box>
    </Container>
  );
}
