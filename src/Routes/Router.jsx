import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'coverage',
        Component:Coverage,
        loader:()=>fetch('/ServiceCenters.json').then(res=>res.json())  
      },
      {
        path:'about',
        Component:About
      },
      {
        path:'rider',
        element:<PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>
      },
      {
        path:'send-parcel',
        element:<PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>
      }
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);
