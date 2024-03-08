import jsonEmployees from "../../mockData/employee_data.json";
import { capitalizeFirstLetterAndLowerCaseTheRest, checkIfDateIsReal, cleanString } from "../functions";


export const getEmployees = () => {
  const parsedEmployees = jsonEmployees.map((item: any) => {
    let totalHours = 0;
    item.labour.forEach((entry: any) => {
      // We only want to count the hours if the date is real
      if (checkIfDateIsReal(entry.date)) totalHours += entry.total;
    });

    //We are building the display name of the employee,
    //making sure the first letter of the first and last name are capitalized,
    //and the rest of the letters are lower case
    const firstName =
      capitalizeFirstLetterAndLowerCaseTheRest(item.first_name);
    const lastName =
      capitalizeFirstLetterAndLowerCaseTheRest(item.last_name);
    const displayName = firstName +(lastName !== "" ? " " + lastName : "");
    return {
      fullName: cleanString(displayName),
      totalHours: totalHours,
    };
  });
  return parsedEmployees;
};
