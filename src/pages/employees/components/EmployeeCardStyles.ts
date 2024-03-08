import colorsConfig from "../../../constants/styles/colors";
import sizesConfigs from "../../../constants/styles/sizes";

export const EmployeeCardStyles = {
    cardContainer:{
      width: sizesConfigs.cards.width,
      borderRadius: "0px",
      boxShadow: "unset",
      border: `2px solid ${colorsConfig.mainBorderColor}`,
    },
    cardContent:{
      padding: "15px",
      "&:last-child": {
        paddingBottom: 1,
      },
    },
    fullNameText:{
      //We are truncating the fullName to avoid overflow if it's too long
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      //End of truncating
      fontSize: sizesConfigs.cards.fullName.fontSize,
      fontWeight: "bold",
      color: colorsConfig.mainFontColor,
    },
    contentStack:{
      width: "100%",
      marginTop: sizesConfigs.cards.content.marginTop,
    },
    totalHoursLabel:{
      fontWeight: "bold",
      color: colorsConfig.mainFontColor,
      fontSize: sizesConfigs.cards.content.fontSize,
    },
    totalHoursValue:{
      color: colorsConfig.mainFontColor,
      marginRight: "5px",
      fontSize: sizesConfigs.cards.content.fontSize,
    }
}