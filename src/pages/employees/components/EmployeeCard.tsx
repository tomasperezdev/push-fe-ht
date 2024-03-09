import {
  Alert,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { EmployeeCardStyles } from "./EmployeeCardStyles";
import { localizedStrings } from "../../../constants/localization/en";
import { EntryError } from "../../../constants/interfaces/errors";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";

type Props = {
  fullName: string;
  totalHours: number;
  errors?: EntryError[];
};

const EmployeeCard = (props: Props) => {
  const { fullName, totalHours, errors } = props;
  const [errorsAlertOpen, setErrorsAlertOpen] = useState(false);
  const renderErrors = (errors: EntryError[] | undefined) => {
    if (!errors) return null;
    return errors.map((error, index) => {
      return (
        <div key={index}>
          <Typography variant="subtitle2">
            We found some errors in the employee's entries:
          </Typography>
          <Typography variant="body2">
            * {error.code} - {error.message}
          </Typography>
        </div>
      );
    });
  };
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
            {totalHours.toFixed(1)}
          </Typography>
          {errors && errors.length > 0 && (
            <WarningIcon
              onClick={() => setErrorsAlertOpen(!errorsAlertOpen)}
              sx={{ width: "20px", cursor: "pointer" }}
              color="warning"
            />
          )}
        </Stack>
        <Collapse in={errorsAlertOpen}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorsAlertOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {renderErrors(errors)}
          </Alert>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
