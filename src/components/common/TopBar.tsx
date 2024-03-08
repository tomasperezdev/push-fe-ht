import { AppBar, Avatar, Box, Stack, Toolbar, Typography } from "@mui/material";
import sizesConfigs from "../../constants/styles/sizes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import useCurrentDevice from "../../utils/hooks/useCurrentDevice";
import { SupportedDevices } from "../../utils/supportedDevices";
import { TopBarStyles } from "./TopBarStyles";

const Topbar = () => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const currentDevice = useCurrentDevice();
  return (
    <AppBar
      position="fixed"
      sx={{
        width:
          currentDevice === SupportedDevices.desktop
            ? `calc(100% - ${sizesConfigs.sidebar.width})`
            : "100%",
        ...TopBarStyles.appBar,
      }}
    >
      <Toolbar>
        <Box sx={TopBarStyles.stateBox}>
          <Typography variant="h6" sx={TopBarStyles.stateText}>
            {appState}
          </Typography>
        </Box>
        <Box sx={TopBarStyles.userBox}>
          <Stack
            sx={TopBarStyles.userStack}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={TopBarStyles.userAvatar}>JS</Avatar>
            <Stack
              sx={TopBarStyles.userTextStack}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography variant="subtitle1" sx={TopBarStyles.userName}>
                John Smith
              </Typography>
              <Typography variant="subtitle1" sx={TopBarStyles.userEmail}>
                johnsmith@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
