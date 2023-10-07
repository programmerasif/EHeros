import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import Details from "./components/Details/Details";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
    },
    {
        path:"details/:id",
        element: <Details />,
        loader: ({params}) => {return params }
      }
  ]);