import { ListItemButton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";
import colorsConfig from "../../constants/styles/colors";
import { SideBarStyles } from "./SideBarStyles";

type Props = {
  item: RouteType;
};

const SideBarItem = ({ item }: Props) => {
  const { appState } = useSelector(
    (state: RootState) => (state as RootState).appState
  );

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        backgroundColor:
          appState === item.state ? colorsConfig.sidebar.activeBg : "unset",
        fontWeight: appState === item.state ? "bold" : "normal",
        ...SideBarStyles.sideBarItem,
      }}
    >
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SideBarItem;
