import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CreateIcon from "@mui/icons-material/Create";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import WalletIcon from "@mui/icons-material/Wallet";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FirebaseAuth } from "../config/firebase";
import { Button } from "@mui/material";

const drawerWidth = 240;

const icons = [
  <HomeIcon />,
  <FormatAlignLeftIcon />,
  <DescriptionIcon />,
  <GroupIcon />,
  <EqualizerIcon />,
  <CreateIcon />,
  <RestaurantIcon />,
  <DisplaySettingsIcon />,
  <PermIdentityIcon />,
  <CalendarMonthIcon />,
  <ChatIcon />,
  <WalletIcon />,
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function PermanentDrawerLeft({ user, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const logoutFirebase = async () => await FirebaseAuth.signOut();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Company Name
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box>
            <Badge color="secondary" badgeContent={0}>
              <NotificationsIcon />
            </Badge>
          </Box>
          <Box>
            <Badge color="secondary" badgeContent={0}>
              <MailIcon />
            </Badge>
          </Box>
          <Typography>
            Welcome, {user}
            <Button onClick={logoutFirebase} variant="contained" color="error">
              Sign Out
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {[
            {
              label: "Dashboard",
              route: "/",
            },
            {
              label: "Order List",
              route: "/orderlist",
            },
            {
              label: "Order Details",
              route: "/orderdetails",
            },
            {
              label: "Customers",
              route: "/customers",
            },
            {
              label: "Analytics",
              route: "/analytics",
            },
            {
              label: "Reviews",
              route: "/reviews",
            },
            {
              label: "Food",
              route: "/food",
            },
            {
              label: "Food Details",
              route: "/fooddetails",
            },
            {
              label: "Customer Details",
              route: "/customerdetails",
            },
            {
              label: "Calendar",
              route: "/calendar",
            },
            {
              label: "Chat",
              route: "/chat",
            },
            {
              label: "Wallet",
              route: "/wallet",
            },
          ].map((text, index) => (
            <ListItem key={text.label} disablePadding>
              <ListItemButton
                selected={location.pathname == text.route}
                onClick={(_) => navigate(text.route)}
              >
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
