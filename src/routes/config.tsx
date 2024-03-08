import { ReactNode } from "react";

export type RouteType = {
  element: ReactNode;
  state: string;
  path?: string;
  sidebarProps?: {
    displayText: string;
  };
};
