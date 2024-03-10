import "./App.css";
import Dashboard1 from "./Components/Dashboard/Dashboard1";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/Dashboard/Layouts/MainLayout";
// import { Profilepage1 } from "./Components/Profilepages/customer/Profilepage1";


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
        <MainLayout><Dashboard1/></MainLayout>
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
