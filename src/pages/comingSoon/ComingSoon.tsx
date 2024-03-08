import commingSoonSvg from "../../assets/images/coming_soon.svg";
import { Avatar, Stack, Typography } from "@mui/material";
import { CommingSoonStyles } from "./ComingSoonStyles";
import { localizedStrings } from "../../constants/localization/en";
type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <Stack component="main" sx={CommingSoonStyles.mainStack}>
      <Avatar
        variant="square"
        sx={CommingSoonStyles.avatar}
        src={commingSoonSvg}
      />
      <Typography variant="h4" sx={CommingSoonStyles.bottomText}>
        {localizedStrings.nothingToSeeHere}
      </Typography>
    </Stack>
  );
};

export default ComingSoon;
