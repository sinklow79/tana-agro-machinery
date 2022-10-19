import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Implements from "./routes/Implements";
import News from "./routes/News";
import newsJSON from './components/News.json';

const routerArr = newsJSON.map(news => {
  return {
    path: `мэдээ/${news.title.replace(/ /g, "-")}`,
    element: <News name={news.id} />
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  {
    path: "implements/Гүн боловсруулагч",
    element: <Implements name="Гүн боловсруулагч" />
  },
  {
    path: "implements/Сийрүүлэгч",
    element: <Implements name="Сийрүүлэгч" />
  },
  {
    path: "implements/Далан татагч",
    element: <Implements name="Далан татагч" />
  },
  {
    path: "implements/Сортлогч",
    element: <Implements name="Сортлогч" />
  },
  {
    path: "implements/Үрлэгч",
    element: <Implements name="Үрлэгч" />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
