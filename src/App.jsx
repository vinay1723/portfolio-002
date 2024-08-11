import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "../ui/AppLayout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutme",
        element: <AboutUs />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
