import React from "react";
import OurFeature from "./OurFeature";
import FAQ from "./FAQ";
import OurReview from "./OurReview";
import RateUs from "./RateUs";
import Subscription from "./Subscription";
import FrontPage from "./FrontPage";
import Target from "./Target";


const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 lg:gap-36">
      <FrontPage />
      <OurFeature />
      <Target />
      <FAQ />
      <OurReview />
      <RateUs />
      <Subscription />
    </div>
  );
};

export default Home;
