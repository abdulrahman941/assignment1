import "./App.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portofolio/Portfolio";
import Contact from "./component/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Error from "./component/Error/Error";


function App() {
  const router = createBrowserRouter([
    {path: "/",element: <Layout />,errorElement:<Error/>, children:[
        {path: "/",element: <Home />,},
        {path: "/home",element: <Home />,},
        {path: "/about",element: <About />,},
        {path: "/portfolio",element: <Portfolio />,},
        {path: "/contact",element: <Contact />,},
        {path: "*",element: <Error />,},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
