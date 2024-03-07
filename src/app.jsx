import { Dashboard } from "@mui/icons-material";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profilepage1 from "./Components/Profilepages/customer/Profilepage1";

//router

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/Login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/Profilepageclient",
    element: (
      <div>
        <Profilepage1/>
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
