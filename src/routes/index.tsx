import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./routes";
import { RouteType } from "./config";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      path={route.path}
      element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      key={index}
    ></Route>
  ));
};

export const routes: ReactNode = generateRoute(appRoutes);
