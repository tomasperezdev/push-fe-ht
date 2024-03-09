import jsonEmployees from "../../mockData/employee_data.json";
import { capitalizeFirstLetterAndLowerCaseTheRest, checkIfDateIsValid, checkIfTotalIsValid, cleanString } from "../functions";
import { EntryError } from '../../constants/interfaces/errors';

interface DayWorked {
  date: string;
  total: number;
}

export const getEmployees = () => {
  const parsedEmployees = jsonEmployees.map((item: any) => {
    let totalHours = 0;
    let errors = [] as EntryError[];
    let daysWorked = [] as DayWorked[];
    item.labour.forEach((entry: any) => {
      let shouldAddTotal = true;
      //We check if the date in the entry is not null, we would not want to add the total hours if the date is null
      if(entry.date)
      {
        const dayAlreadyWorked = daysWorked.find((day) => day.date === entry.date);
        if (dayAlreadyWorked) {
          //We are assuming that the total hours worked in a day can be between 0 and 24 
          //so we need to check if the total hours worked in a day is not greater than 24 after adding the new entry
          if((dayAlreadyWorked.total + entry.total) > 24){
            errors.push({
              code: "INVALID_TOTAL_FOR_DAY",
              message: `The total ${entry.total}hrs at ${entry.date} is invalid, the total hours worked in a day can be between 0 and 24, and the total for this day is already ${dayAlreadyWorked.total}hrs`
            });
            shouldAddTotal = false;
          }
          else{
            dayAlreadyWorked.total += entry.total;
          }
        }
        else{
          daysWorked.push({date: entry.date, total: entry.total});
        }
        // We only want to count the hours if the date is real
        let validDate = checkIfDateIsValid(entry.date);
        let validTotal = checkIfTotalIsValid(entry.total);
  
        if (validDate && validTotal) {
          if(shouldAddTotal) totalHours += entry.total;
        }
        if (!validDate) {
          errors.push({
            code: "INVALID_DATE",
            message: `The date ${entry.date} with ${entry.total}hrs is invalid`
          });
        }
        if (!validTotal) {
          errors.push({
            code: "INVALID_TOTAL",
            message: `The total ${entry.total}hrs at ${entry.date} is invalid`
          });
        }
      }
      
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
      errors
    };
  });
  return parsedEmployees;
};
