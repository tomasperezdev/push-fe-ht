import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import logoSvg from "../../assets/images/logo.svg";
import routes from "../../routes/routes";
import SideBarItem from "./SideBarItem";
import { SideBarStyles } from "./SideBarStyles";
import { localizedStrings } from "../../constants/localization/en";

const SideBar = () => {
  return (
    <Drawer variant="permanent" sx={SideBarStyles.drawer}>
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "0px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar src={logoSvg} />
            <Typography variant="subtitle1" sx={SideBarStyles.header}>
              {localizedStrings.brandName}
            </Typography>
          </Stack>
        </Toolbar>
        {routes.map((route, index) =>
          route.sidebarProps ? <SideBarItem item={route} key={index} /> : null
        )}
      </List>
    </Drawer>
  );
};

export default SideBar;
