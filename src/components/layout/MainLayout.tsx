import { Box, SpeedDial, SpeedDialIcon, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TopBar from "../common/TopBar";
import sizesConfigs from "../../constants/styles/sizes";
import SideBar from "../common/SideBar";
import { Link, Outlet, To } from "react-router-dom";
import colorsConfig from "../../constants/styles/colors";
import useCurrentDevice from "../../utils/hooks/useCurrentDevice";
import { SupportedDevices } from "../../utils/supportedDevices";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PeopleIcon from "@mui/icons-material/People";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";
import TimeIcon from "@mui/icons-material/Timer";
import { JSX } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import React from "react";
import { MainLayoutStyles } from "./MainLayoutStyles";

type Props = {};

const MainLayout = (props: Props) => {
  const { appState } = useSelector(
    (state: RootState) => (state as RootState).appState
  );
  const [openDial, setOpenDial] = React.useState(false);
  const withLink = (to: To, children: JSX.Element) => (
    <Link to={to}>{children}</Link>
  );

  const actions = [
    {
      icon: withLink(
        "/",
        <PeopleIcon
          sx={{
            color:
              appState === "employees"
                ? colorsConfig.inputBg
                : colorsConfig.brandColor,
          }}
        />
      ),
      state: "employees",
      name: "Employees",
    },
    {
      icon: withLink(
        "/scheduler",
        <CalendarIcon
          sx={{
            color:
              appState === "scheduler"
                ? colorsConfig.inputBg
                : colorsConfig.brandColor,
            ...MainLayoutStyles.actionIcon,
          }}
        />
      ),
      state: "scheduler",
      name: "Scheduler",
    },
    {
      icon: withLink(
        "/time-tracking",
        <TimeIcon
          sx={{
            color:
              appState === "time tracking"
                ? colorsConfig.inputBg
                : colorsConfig.brandColor,
            ...MainLayoutStyles.actionIcon,
          }}
        />
      ),
      state: "time tracking",
      name: "Time Tracking",
    },
  ];
  const currentDevice = useCurrentDevice();
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar />
      {currentDevice === SupportedDevices.desktop ? (
        <Box component="nav" sx={MainLayoutStyles.sideBarBox}>
          <SideBar />
        </Box>
      ) : (
        <></>
      )}

      <Box
        component="main"
        sx={[
          {
            p: currentDevice === SupportedDevices.desktop ? 3 : 10,
            width:
              currentDevice === SupportedDevices.desktop
                ? `calc(100% - ${sizesConfigs.sidebar.width})`
                : "100%",
            ...MainLayoutStyles.mainContentBox,
          },
        ]}
      >
        <Toolbar />
        <Outlet />

        {currentDevice !== SupportedDevices.desktop ? (
          <SpeedDial
            onClick={() => setOpenDial(!openDial)}
            open={openDial}
            sx={MainLayoutStyles.speedDial}
            FabProps={{ color: "info" }}
            icon={
              <SpeedDialIcon icon={<MenuIcon />} openIcon={<CloseIcon />} />
            }
            ariaLabel={"FABMenu"}
          >
            {actions.map((action) => (
              <SpeedDialAction
                sx={{
                  backgroundColor:
                    appState === action.state
                      ? colorsConfig.brandColor
                      : "unset",
                }}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => setOpenDial(false)}
              />
            ))}
          </SpeedDial>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
