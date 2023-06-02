import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { UserType } from "../types/UserType";
import {
  Delete,
  Edit,
  Search,
  Tune,
  Add,
  ExpandMore,
} from "@mui/icons-material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useState } from "react";
import { getDate, getTime } from "../utils/formatDateFromString";
import EmptyPage from "../components/EmptyPage";

const rows: UserType[] = [
  {
    id: 1,
    name: "Tunalı Hilmi",
    email: "mhdys.prs@example.com",
    tel: "+53 55555555",
    status: "Activo",
    rols: ["Usuario", "Super Admin"],
    createAt: "2015-02-27T13:14:02.638Z",
    img: "https://randomuser.me/api/portraits/med/women/60.jpg",
  },
  {
    id: 2,
    name: "Elli Kangas",
    email: "elli.kangas@example.com",
    tel: "+53 55555555",
    status: "Bloqueado",
    rols: ["Usuario"],
    createAt: "2015-06-13T00:11:21.729Z",
    img: "https://randomuser.me/api/portraits/med/men/50.jpg",
  },
  {
    id: 3,
    name: "Mason Liu",
    email: "mason.liu@example.com",
    tel: "-",
    status: "Activo",
    rols: ["Usuario", "Dtor. Unidad"],
    createAt: "2015-10-30T00:02:19.645Z",
    img: "https://randomuser.me/api/portraits/med/men/61.jpg",
  },
  {
    id: 4,
    name: "Latife Demirbas",
    email: "latife.demirbas@example.com",
    tel: "+53 55555555",
    status: "Activo",
    rols: ["Usuario", "Super Admin"],
    createAt: "2004-04-16T09:02:52.829Z",
    img: "https://randomuser.me/api/portraits/med/women/52.jpg",
  },
  {
    id: 5,
    name: "Milka Simeonović",
    email: "simeonovic@example.com",
    tel: "+53 55555555",
    status: "Bloqueado",
    rols: ["Usuario"],
    createAt: "2020-03-19T03:01:01.595Z",
    img: "https://randomuser.me/api/portraits/med/women/82.jpg",
  },
];

export default function Usuarios() {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const [countRowSelected, setCountRowSelected] = useState([]);
  const printSelection = (sel: any) => {
    setCountRowSelected(sel);
  };
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderCellForName = (rowData: GridRenderCellParams) => (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <Avatar sx={{ width: 36, height: 36 }} src={rowData.row.img} />
      <Typography
        color="primary"
        sx={{
          transitionDuration: "0.5s",
          fontSize: "0.9rem",
          "&:hover": {
            fontFamily: "cursive",
            textDecoration: "underline",
            fontStyle: "italic",
            fontSize: "1rem",
            cursor: "pointer",
          },
        }}
      >
        {rowData.row.name}
      </Typography>
    </div>
  );
  const renderCellForState = (rowData: GridRenderCellParams) => (
    <Button
      variant="contained"
      sx={{ textTransform: "none", color: "#fff" }}
      color={rowData.row.status === "Activo" ? "success" : "error"}
      size="small"
      onClick={() => {
        console.log("Edit button clicked for row " + rowData.id);
      }}
    >
      {rowData.row.status}
    </Button>
  );
  const renderCellForRols = (rowData: GridRenderCellParams) => (
    <div style={{ display: "flex", gap: 5 }}>
      {rowData.row.rols.map((rol: string, i: number) => (
        <Button
          key={i}
          color="secondary"
          sx={{
            textTransform: "none",
            color: theme.palette.primary.main,
            gap: ".2rem",
            "&:hover": {
              background: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              boxShadow: "none",
            },
          }}
          variant="contained"
          size="small"
        >
          <VerifiedUserIcon sx={{ fontSize: "1.2rem" }} />
          {rol}
        </Button>
      ))}
    </div>
  );
  const renderCellForDate = (rowData: GridRenderCellParams) => (
    <i>
      {getDate(rowData.row.createAt) + " | "}
      {getTime(rowData.row.createAt)}
    </i>
  );
  const renderCellForActions = () => (
    <Box>
      <Edit color="primary" />
      <Delete color="primary" />
    </Box>
  );

  const columns: GridColDef[] = [
    {
      field: "name",
      flex: 0.8,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: renderCellForName,
      renderHeader: () => (
        <p>
          {countRowSelected.length === 0
            ? "Nombre de Usuario"
            : `${countRowSelected.length} Seleccionado(s)`}
        </p>
      ),
    },
    {
      field: "email",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderHeader: () => (
        <p>{countRowSelected.length === 0 ? "Correo" : ""}</p>
      ),
    },
    {
      field: "tel",
      flex: 0.6,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderHeader: () => (
        <p>{countRowSelected.length === 0 ? "Teléfono" : ""}</p>
      ),
    },
    {
      field: "estado",
      flex: 0.5,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: renderCellForState,
      renderHeader: () => (
        <p>{countRowSelected.length === 0 ? "Estado" : ""}</p>
      ),
    },
    {
      field: "rols",
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: renderCellForRols,
      renderHeader: () => <p>{countRowSelected.length === 0 ? "Roles" : ""}</p>,
    },
    {
      field: "createAt",
      flex: 0.7,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: renderCellForDate,
      renderHeader: () => (
        <p>{countRowSelected.length === 0 ? "Fecha de Creación" : ""}</p>
      ),
    },
    {
      field: "actions",
      flex: 0.4,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: renderCellForActions,
      renderHeader: () => (
        <p>{countRowSelected.length === 0 ? "Acciones" : ""}</p>
      ),
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "10%",
          alignItems: "center",
          padding: 3,
          paddingTop: "2rem",
        }}
      >
        <Typography
          color="primary"
          sx={{ flexGrow: 1, fontSize: "1.5rem", fontWeight: "600" }}
          component="p"
        >
          Usuarios
        </Typography>
        <Stack direction="row" spacing={2}>
          <OutlinedInput
            size="small"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            }
          />
          <Button
            sx={{ gap: 0.5, textTransform: "none", fontWeight: 600 }}
            size="small"
            variant="outlined"
          >
            <Tune />
            Fecha de creacion
            <ExpandMore />
          </Button>
          <Button
            sx={{ gap: 0.5, textTransform: "none", fontWeight: 600 }}
            size="small"
            variant="outlined"
          >
            <Add />
            Adicionar
          </Button>
        </Stack>
      </Box>

      <div style={{ height: "90%", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ padding: "0 1rem 16px" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab sx={{ textTransform: "none" }} label="Todos" value="1" />
                <Tab sx={{ textTransform: "none" }} label="Activos" value="2" />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Sin Verificar"
                  value="3"
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  label="Bloqueados"
                  value="4"
                />
              </TabList>
            </Box>
            <TabPanel
              sx={{
                flexGrow: 1,
                p: 0,
              }}
              value="1"
            >
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={(sel) => printSelection(sel)}
              />
            </TabPanel>
            <TabPanel sx={{ flexGrow: 1, p: 0 }} value="2">
              <EmptyPage message="Activos" />
            </TabPanel>
            <TabPanel sx={{ flexGrow: 1, p: 0 }} value="3">
              <EmptyPage message="Sin Verificar" />
            </TabPanel>
            <TabPanel sx={{ flexGrow: 1, p: 0 }} value="4">
              <EmptyPage message="Bloqueados" />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
