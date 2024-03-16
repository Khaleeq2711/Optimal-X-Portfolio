import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Pages/Root";
import Hotjar from "@hotjar/browser";
// import ReactGA from "react-ga";
const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/Pages/AboutPage"));
const Thanks = lazy(() => import("./components/UI/Thanks"));
const Branding = lazy(() => import("./components/Pages/BrandingPage"));
const WebPage = lazy(() => import("./components/Pages/WebPage"));
const GraphicPage = lazy(() => import("./components/Pages/GraphicPage"));
const DigitalPage = lazy(() => import("./components/Pages/DigitalPage"));
const EcommercePage = lazy(() => import("./components/Pages/ECommercePage"));
const ShortPage = lazy(() => import("./components/Pages/ShortPage"));
const ContactPage = lazy(() => import("./components/Pages/ContactUsPage"));
const BlogPage = lazy(() => import("./components/Pages/BlogPage"));
const Newsletter = lazy(() => import("./components/Pages/Newsletter"));
// const MobilePage = lazy(() => import("./components/Pages/MobilePage"));

const siteId = 3688224;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

// const TRACKING_ID = "G-K6E59DCPK2"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID, { debug: true });

const fallBack = <div style={{ height: "100vh" }}> </div>;
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={fallBack}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "Thanks",
        element: (
          <Suspense fallback={fallBack}>
            <Thanks />
          </Suspense>
        ),
      },
      {
        path: "About",
        element: (
          <Suspense fallback={fallBack}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "Branding",
        element: (
          <Suspense fallback={fallBack}>
            <Branding />
          </Suspense>
        ),
      },
      {
        path: "Webservice",
        element: (
          <Suspense fallback={fallBack}>
            <WebPage />
          </Suspense>
        ),
      },
      {
        path: "Designing",
        element: (
          <Suspense fallback={fallBack}>
            <GraphicPage />
          </Suspense>
        ),
      },
      {
        path: "Digital",
        element: (
          <Suspense fallback={fallBack}>
            <DigitalPage />
          </Suspense>
        ),
      },
      // {
      //   path: "Mobile",
      //   element: (
      //     <Suspense fallback={fallBack}>
      //       <MobilePage />
      //     </Suspense>
      //   ),
      // },
      {
        path: "Short",
        element: (
          <Suspense fallback={fallBack}>
            <ShortPage />
          </Suspense>
        ),
      },
      {
        path: "ECommerce",
        element: (
          <Suspense fallback={fallBack}>
            <EcommercePage />
          </Suspense>
        ),
      },
      {
        path: "Contact",
        element: (
          <Suspense fallback={fallBack}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "Blog",
        element: (
          <Suspense fallback={fallBack}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "Newsletter",
        element: (
          <Suspense fallback={fallBack}>
            <Newsletter />
          </Suspense>
        ),
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
export default App;
