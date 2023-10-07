import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
  ]);