import colorsConfig from "../../constants/styles/colors";
import sizesConfigs from "../../constants/styles/sizes";

export const SideBarStyles = {
    drawer:{
        width: sizesConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizesConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: `2px solid ${colorsConfig.mainBorderColor}`,
          backgroundColor: colorsConfig.sidebar.bg,
          color: colorsConfig.sidebar.color,
        },
    },
    header:{
        paddingX: "15px",
        fontWeight: "bold",
        fontSize: sizesConfigs.sidebarHeader.fontSize,
        color: colorsConfig.mainFontColor,
    },
    sideBarItem:{
        "&: hover": {
            backgroundColor: colorsConfig.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "30px",
          color: colorsConfig.mainFontColor,
    }
    
}