import colorsConfig from "../../constants/styles/colors";

export const CommingSoonStyles = {
    mainStack:{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colorsConfig.mainBg,
    },
    avatar:{ width: "40%", height: "40%" },
    bottomText:{
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        color: colorsConfig.mainFontColor,
    }
}