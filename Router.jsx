import { createBrowserRouter } from "react-router-dom";
import CampusDashboard from "./DashBoardPages/CampusDashboard";
import CampusWeather from "./DashBoardPages/CampusWeather";
import CampusMap from "./DashBoardPages/CampusMap";
import CampusEvents from "./DashBoardPages/CampusEvents";
import App from "./App";


export default createBrowserRouter([
  {
    path: "/signin",
    element: <App />,
  },

  {
    path: "/",
    element: <CampusDashboard />,
  },

  {
    path: "/weather",
    element: <CampusWeather />,
  },

  {
    path: "/map",
    element: <CampusMap />,
  },

  {
    path: "/events",
    element: <CampusEvents />,
  },
]);
