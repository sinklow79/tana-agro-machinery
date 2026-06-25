import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Implements, { loader as implementsLoader } from "./routes/Implements";
import NewsPage, { loader as newsLoader } from "./routes/News";
import Root from "./routes/root";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "tuhuurumjuud/:urlName",
        element: <Implements />,
        loader: implementsLoader,
      },
      {
        path: "medee/:newsId",
        element: <NewsPage />,
        loader: newsLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  // </StrictMode>
    <RouterProvider router={router} />
);
