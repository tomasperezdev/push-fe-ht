import colorsConfig from "../../constants/styles/colors";
import sizesConfigs from "../../constants/styles/sizes";

export const TopBarStyles = {
    appBar:{
        ml: sizesConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorsConfig.topbar.bg,
        color: colorsConfig.topbar.color,
        borderBottom: `2px solid ${colorsConfig.mainBorderColor}`,
        borderTop: "none",
    },
    stateBox:{ flexGrow: 1, display: "flex" },
    stateText:{
        textTransform: "capitalize",
        color: colorsConfig.mainFontColor,
    },
    userBox:{ flexGrow: 0 },
    userStack:{ width: "100%" },
    userAvatar:{ bgcolor: colorsConfig.userAvatarBg },
    userTextStack:{ width: "100%" },
    userName:{
        lineHeight: "1",
        paddingTop: "2px",
        paddingX: "10px",
        fontWeight: "bold",
        fontSize: sizesConfigs.topBar.avatar.name.fontSize,
        fontSynthesisWeight: "bold",
        color: colorsConfig.mainFontColor,
    },
    userEmail:{
        paddingX: "10px",
        fontSize: sizesConfigs.topBar.avatar.email.fontSize,
        color: colorsConfig.mainFontColor,
    }

   
    
}