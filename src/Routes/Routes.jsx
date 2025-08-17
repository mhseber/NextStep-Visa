import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import VisaServices from "../Pages/VisaServices";
import MyApplication from "../Pages/MyApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "visaServices",
        element: <VisaServices />,
      },
      {
        path: "myApplication",
        element: <MyApplication />,
      },
    ],
  },
]);
