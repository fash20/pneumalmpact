import React, { ReactNode } from "react";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";

const steps = [
  {
    titleBlue: "Apply for",
    titleRed: "program",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    component: "",
  },
  {
    titleBlue: "",
    titleRed: "",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    component: "",
  },
  {
    titleBlue: "",
    titleRed: "",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    component: "",
  },
  {
    titleBlue: "",
    titleRed: "",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    component: "",
  },
];

function OurFeature() {
  return (
    <div>
      <div className="text-center mb-28">
        <div>
          <span className="step-title-blue">How it </span>
          <span className="step-title-red">Works</span>
        </div>
        <div>
          <p className="hiw-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet
          </p>
        </div>
      </div>
      <div>
        <StepContainer />
      </div>
    </div>
  );
}

export default OurFeature;

const StepContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <Step
        detail="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        "
      >
        <div className="">
          <span className="step-title-blue1">Apply for the </span>
          <span className="step-title-red1">program</span>
        </div>
      </Step>

      <div>
        <Mentorship />
      </div>
    </div>
  );
};

interface Step {
  children: ReactNode;
  detail: string;
}

const Step: React.FC<Step> = (prop) => {
  const { children, detail } = prop;
  return (
    <div className="flex flex-col gap-y-5">
      <div>{children}</div>
      <p className="step-detail">{detail}</p>
    </div>
  );
};
