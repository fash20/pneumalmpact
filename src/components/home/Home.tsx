import React from "react";
import OurFeature from "./OurFeature";
import FAQ from "./FAQ";
import OurReview from "./OurReview";
import RateUs from "./RateUs";
import Subscription from "./Subscription";
import FrontPage from "./FrontPage";

const Home = () => {
  return (
    <div className=" ">
      <FrontPage />
      <OurFeature />
      <FAQ />
      <OurReview />
      <RateUs />
      <Subscription />
    </div>
  );
};

export default Home;
