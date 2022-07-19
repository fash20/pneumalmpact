import React from "react";
import OurFeature from "./OurFeature";
import FAQ from "./FAQ";
import OurReview from "./OurReview";
import RateUs from "./RateUs";
import Subscription from "./Subscription";
import FrontPage from "./FrontPage";


// sm:px-5 md:px-10 lg:px-28 

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-36">
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
