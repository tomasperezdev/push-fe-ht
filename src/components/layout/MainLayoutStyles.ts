import colorsConfig from "../../constants/styles/colors";
import sizesConfigs from "../../constants/styles/sizes";

export const MainLayoutStyles = {
    sideBarBox:{
        width: sizesConfigs.sidebar.width,
        flexShrink: 0,
    },
    mainContentBox:{
        flexGrow: 1,
          paddingTop: 3,
          minHeight: "100vh",
          backgroundColor: colorsConfig.mainBg,
    },
    speedDial:{
        position: "absolute",
        bottom: 16,
        right: 16,
    },
    actionIcon:{
        marginTop: "5px",
    }
}