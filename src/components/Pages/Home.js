import React, { useEffect, lazy, Suspense } from "react";
import Starting from "../main/starting";
import Trust from "../main/Trust";
// import ReactGA from "react-ga";
const ChooseUs = lazy(() => import("../main/ChooseUs"));
const Discuss = lazy(() => import("../main/Discuss"));
const EmailAttract = lazy(() => import("../main/EmailAttract"));
const Offer = lazy(() => import("../main/Offer"));
const Reviews = lazy(() => import("../main/Reviews"));
// const Starting = lazy(() => import("../main/starting"));
// const Trust = lazy(() => import("../main/Trust"));
// const Work = lazy(()=>import("../main/Work"))

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // ReactGA.pageview("/Home");
  }, []);

  return (
    <>
      <Starting />
      <Trust />

      <Suspense fallback={<div> </div>}>
        <Offer />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <ChooseUs />
      </Suspense>

      {/* <Suspense fallback={<div> </div>}>
        <Work />
      </Suspense> */}

      <Suspense fallback={<div> </div>}>
        <EmailAttract />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Reviews />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Discuss />
      </Suspense>
    </>
  );
}

export default Home;
