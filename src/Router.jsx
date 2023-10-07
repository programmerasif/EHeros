import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import Details from "./components/Details/Details";
import Main from "./Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import EditPage from "./components/EditPage/EditPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main />,

        children: [
              {
                path: "/",
                element: <Users />,
              },
              {
                  path:"details/:id",
                  element: <Details />,
                  loader: ({params}) => {return params }
              },
              {
                path: "/login",
                element:<Login />
              },
              {
                path: "/register",
                element:<Register />
              },
              {
                path: "edit/:id",
                element:<EditPage />,
                loader: ({params}) => {return params }
              }
        ]
    }
  ]);