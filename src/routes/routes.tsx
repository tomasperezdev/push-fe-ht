import { RouteType } from "./config";
import Employees from "../pages/employees/Employees";
import ComingSoon from "../pages/comingSoon/ComingSoon";

const appRoutes: RouteType[] = [
  {
    path: "/",
    element: <Employees />,
    state: "employees",
    sidebarProps: {
      displayText: "Employees",
    },
  },
  {
    path: "/scheduler",
    element: <ComingSoon />,
    state: "scheduler",
    sidebarProps: {
      displayText: "Scheduler",
    },
  },
  {
    path: "/time-tracking",
    element: <ComingSoon />,
    state: "time tracking",
    sidebarProps: {
      displayText: "Time Tracking",
    },
  },
];

export default appRoutes;
