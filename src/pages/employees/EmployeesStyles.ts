import colorsConfig from "../../constants/styles/colors";
import sizesConfigs from "../../constants/styles/sizes";

export const EmployeesStyles = {
    filterInput:{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: "0px",
            borderColor: colorsConfig.mainBorderColor,
          },
          "&:hover fieldset": {
            borderColor: colorsConfig.mainFontColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: colorsConfig.brandColor,
            borderRadius: "0px",
          },
        },
        backgroundColor: colorsConfig.inputBg,
      },
    cardsStack:{
        width: "100%",
        marginTop: sizesConfigs.cards.marginTop,
    },
    notFoundText:{
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: sizesConfigs.sidebarHeader.fontSize,
        color: colorsConfig.mainFontColor,
    }
}