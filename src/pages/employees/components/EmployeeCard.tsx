import { Card, CardContent, Stack, Typography } from "@mui/material";
import { EmployeeCardStyles } from "./EmployeeCardStyles";
import { localizedStrings } from "../../../constants/localization/en";

type Props = {
  fullName: string;
  totalHours: number;
};

const EmployeeCard = (props: Props) => {
  const { fullName, totalHours } = props;
  return (
    <Card data-testid="employee-card" sx={EmployeeCardStyles.cardContainer}>
      <CardContent sx={EmployeeCardStyles.cardContent}>
        <Typography variant="h5" sx={EmployeeCardStyles.fullNameText}>
          {fullName}
        </Typography>
        <Stack
          spacing={4}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={EmployeeCardStyles.contentStack}
          flex={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            sx={EmployeeCardStyles.totalHoursLabel}
          >
            {localizedStrings.totalHours}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={EmployeeCardStyles.totalHoursValue}
          >
            {totalHours}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
