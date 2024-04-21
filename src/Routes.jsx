import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import PageOne from "pages/PageOne";
import PageTwo from "pages/PageTwo";
import PageThree from "pages/PageThree2";
import PageFour from "pages/PageThree";
import PageFive from "pages/PageFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "page1",
      element: <PageOne />,
    },
    {
      path: "page2",
      element: <PageTwo />,
    },
    {
      path: "page3",
      element: <PageThree />,
    },
    {
      path: "page4",
      element: <PageFour />,
    },
    {
      path: "page5",
      element: <PageFive />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
