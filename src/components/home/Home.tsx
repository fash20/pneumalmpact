import { Button, Heading } from "evergreen-ui";
import React from "react";
import ideaImage from "../assets/images/idea.svg";
import womanImage from "../assets/images/woman.svg";
import Stats from "./Stats";
import heclipse from "../assets/images/heclipse.svg";
import veclipse from "../assets/images/veclipse.svg";
import OurFeature from "./OurFeature";
import FAQ from "./FAQ";
import OurReview from "./OurReview";
import RateUs from "./RateUs";
import Subscription from "./Subscription";

const Home = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 ">
        <div className="flex gap-y-10 flex-col lg:mx-24 sm:mx-10 ">
          <div className="flex-0 ">
            <img src={ideaImage} alt="pnuemalmpact" />
          </div>
          <div>
            <p className="poppins about-pneuma">
              PneumaImpact has helped entrepreneurs with an idea to start a
              business while providing them skills, mentorship, and funds to get
              started.
            </p>
          </div>
          <div className="flex gap-x-4 ">
            <Button appearance="primary" height={40}>
              Get Started
            </Button>
            <Button appearance="secondary" height={40}>
              Become a Partner
            </Button>
          </div>
          <div>
            <div className="flex flex-row gap-10">
              <Stats title="Customer" value={"5,0000"} />
              <Stats title="Delivery" value={"5,0000"} />
              <Stats title="Rating" value={"5,0000"} />
            </div>
          </div>
        </div>
        <div className="pos-relative">
          <img className="veclipse" src={veclipse} />
          <img className="heclipse" src={heclipse} />
          <img src={womanImage} className="woman-image" alt="woman" />
        </div>
      </div>

      <OurFeature />
      <FAQ />
      <OurReview />
      <RateUs />
      <Subscription />
    </div>
  );
};

export default Home;
