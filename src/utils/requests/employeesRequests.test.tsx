import Employees from "../../pages/employees/Employees";
import { getEmployees } from "./employeesRequests";
import { render, screen } from "@testing-library/react";

describe("getEmployees", () => {
  it("should return an array of employees with fullName and totalHours", () => {
    const result = getEmployees();
    result.forEach((employee) => {
      expect(employee).toHaveProperty("fullName");
      expect(employee).toHaveProperty("totalHours");
    });
  });

  it("should only count hours for real dates", () => {
    const result = getEmployees();
    expect(result).toEqual([
      { fullName: "Cave Johnson", totalHours: 0 },
      { fullName: "Chell Johnson", totalHours: 15.32 },
      { fullName: "Doug Rattmann", totalHours: 7.57 },
      { fullName: "Glados", totalHours: 48 },
    ]);
  });

  it("should capitalize the first letter of first and last names", () => {
    const result = getEmployees();
    result.forEach((employee) => {
      const words = employee.fullName.split(" ");
      words.forEach((word) => {
        expect(word).toEqual(
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
      });
    });
  });

  it("should render the correct amount of EmployeeCard components", () => {
    render(<Employees />);
    const employeeCards = screen.getAllByTestId("employee-card");
    console.log("employeeCards", employeeCards);
    expect(employeeCards).toHaveLength(4);
  });
});
