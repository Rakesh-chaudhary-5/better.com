import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import "./index.css";
import AboutUs from "./components/AboutUs.jsx";
import Calculator from "./components/Calculator.jsx";
import StartPage from "./components/StartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/better.com",
    element: <App />,
    children: [
      {
        path: "/better.com",
        element: <Home />,
      },
      {
        path: "/better.com/about-us",
        element: <AboutUs />,
      },
      {
        path: "/better.com/mortgage-calculator",
        element: <Calculator />,
      },
    ],
  },
  {
    path: "/start",
    element: <StartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
