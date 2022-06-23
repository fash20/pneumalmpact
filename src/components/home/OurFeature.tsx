import React, { ReactNode } from "react";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";
import Transaction from "./animatedsvgs/Transaction";


function OurFeature() {
  return (
    <div>
      <div className="text-center ">
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
      <div className="grid gap-y-40">
        <StepContainer detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Application />
        </StepContainer>
        <StepContainer direction="flex-row-reverse" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Training />
        </StepContainer >
        <StepContainer detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Mentorship />
        </StepContainer>
        <StepContainer direction="flex-row-reverse" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Transaction />
        </StepContainer>
      </div>
    </div>
  );
}

export default OurFeature;

const StepContainer: React.FC<Step> = (props) => {
  const { children, detail, direction } = props;

  return (
    <div className={`flex flex-row gap-x-40 ${direction} items-center justify-between`}>
      <Step detail={detail}>
        <div className="">
          <span className="step-title-blue1">Apply for the </span>
          <span className="step-title-red1">program</span>
        </div>
      </Step>

      <div>{children}</div>
    </div>
  );
};

interface Step {
  children?: ReactNode;
  detail?: string;
  direction?: string;
}

const Step: React.FC<Step> = (props) => {
  const { children, detail } = props;
  return (
    <div className="flex flex-col gap-y-5">
      <div>{children}</div>
      <p className="step-detail">{detail}</p>
    </div>
  );
};
