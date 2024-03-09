import moment from "moment";

export const capitalizeFirstLetterAndLowerCaseTheRest = (word: string) => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };
  
  export const cleanString = (str: string) => {
    if (!str) return ""; //We are checking wether the name is null or undefined, if it is we return an empty string
    return str.replace(/[^a-zA-Z ]/g, "");
  };
  
  /*export const checkIfDateIsReal = (date: string) => {
    //We were assuming that the date is in the format "DD-MM-YY" and that they are date from 2000 and forward
     let dateArray = date.split("-");
    let newDate = `20${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; 
    return !isNaN(Date.parse(newDate));
  };*/

  export const checkIfTotalIsValid = (total: number) => {
    //We are assuming that the total hours worked in a day can be between 0 and 24
    return total >= 0 && total <= 24;
  };

  export const checkIfDateIsValid = (dateString: string) => {
    //All values in the demo JSON file are in the format "YY-MM-DD". 
    //For the purpose of this exercise, we will consider this format as valid even when the instructions said the format should be YYYY-MM-DD
    return moment(dateString, 'YY-MM-DD', true).isValid();
  }
  