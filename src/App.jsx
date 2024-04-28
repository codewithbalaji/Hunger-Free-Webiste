import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import "./App.css";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";
import Dashboard from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Logins";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./Components/Protected";
import DashUsers from "./Dashboard/DashUsers";
import DashPosts from "./Dashboard/DashPosts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/reviews",
      element: <Reviews />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/dashboard/users",
      element: (
        <Protected>
          <DashUsers />
        </Protected>
      ),
    },
    {
      path: "/dashboard/posts",
      element: (
        <Protected>
          <DashPosts/>
        </Protected>
      ),
    },
  ]);

  return (
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  );
}

export default App;
