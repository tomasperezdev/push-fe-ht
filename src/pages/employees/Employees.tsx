import { Stack, TextField, Typography } from "@mui/material";
import EmployeeCard from "./components/EmployeeCard";
import { useEffect, useState } from "react";
import { getEmployees } from "../../utils/requests/employeesRequests";
import useCurrentDevice from "../../utils/hooks/useCurrentDevice";
import { SupportedDevices } from "../../utils/supportedDevices";
import { EmployeesStyles } from "./EmployeesStyles";
import { localizedStrings } from "../../constants/localization/en";
import { EntryError } from "../../constants/interfaces/errors";

type Props = {};

interface Employee {
  fullName: string;
  totalHours: number;
  errors?: EntryError[];
}

const Employees = (props: Props) => {
  const currentDevice = useCurrentDevice();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (employees.length === 0) {
      const currentEmployees = getEmployees();
      console.log("currentEmployees", currentEmployees);
      setEmployees(currentEmployees);
      setFilteredEmployees(currentEmployees);
    }
  }, [employees]);

  const renderEmployees = () => {
    return filteredEmployees.map((item, index) => {
      return (
        <EmployeeCard
          key={index}
          fullName={item.fullName}
          totalHours={item.totalHours}
          errors={item.errors}
        />
      );
    });
  };

  const handleFilter = (event: any) => {
    const filtered = employees.filter((employee) =>
      employee.fullName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  return (
    <>
      <TextField
        onChange={handleFilter}
        placeholder={localizedStrings.filterEmployeesByName}
        sx={{
          width: currentDevice !== SupportedDevices.desktop ? "100%" : "50%",
          ...EmployeesStyles.filterInput,
        }}
        id="outlined-basic"
        variant="outlined"
      />
      <Stack
        spacing={2}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{
          justifyContent:
            currentDevice !== SupportedDevices.desktop
              ? "center"
              : "flex-start",
          ...EmployeesStyles.cardsStack,
        }}
        flex={1}
        alignItems="center"
      >
        <>{renderEmployees()}</>
        {filteredEmployees.length === 0 && (
          <Typography variant="subtitle1" sx={EmployeesStyles.notFoundText}>
            {localizedStrings.noEmployeesMatch}
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default Employees;
