import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Implements, { loader as implementsLoader } from "./routes/Implements";
import News from "./routes/News";
import newsJSON from "./components/News.json";
import Root from "./routes/root";

const routerArr = newsJSON.map((news) => {
  return {
    path: `мэдээ/${news.title.replace(/ /g, "-")}`,
    element: <News name={news.id} />,
  };
});

const router = createBrowserRouter([
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
