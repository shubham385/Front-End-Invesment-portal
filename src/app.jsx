import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//router

const router = createBrowserRouter([

  {
    path:'/',
    element:<div><Home/></div>
  },
  {
    path:'/Login',
    element: <div><Login/></div>
  },
  {
    path:'/Register',
    element: <div><Register/></div>
  },
  {
    path:'/Dashboard',
    element: <div><Dashboard/></div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
