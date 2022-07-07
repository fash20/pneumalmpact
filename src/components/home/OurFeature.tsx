import React, { ReactNode } from "react";
import { useScreenSize } from "../utils/useScreenSize";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";
import Transaction from "./animatedsvgs/Transaction";

function OurFeature() {
  return (
    <div className="sm:px-5 md:px-10 lg:px-28">
      <div className="text-center ">
        <div className="text-center">
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
      <div className="grid ">
        <StepContainer detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Application />
        </StepContainer>
        <StepContainer
          direction="flex-row-reverse"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Training />
        </StepContainer>
        <StepContainer detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          <Mentorship />
        </StepContainer>
        <StepContainer
          direction="flex-row-reverse"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Transaction />
        </StepContainer>
      </div>
    </div>
  );
}
 
export default OurFeature;

const StepContainer: React.FC<Step> = (props) => {
  const [screenSize, isScreenSmall] = useScreenSize();
  const { children, detail, direction } = props;

  return (
    <div
      className={`flex flex-row sm:gap-x-20 md:gap-x-24 xl:gap-x-40 ${direction} items-center justify-between`}
      id={"slide-left"}
    >
      <Step detail={detail}>
        <div className="">
          <span className="step-title-blue1">Apply for the </span>
          <span className="step-title-red1">program</span>
        </div>
      </Step>
      {!isScreenSmall && (
        <div id={"101"} className="sm:text-center ">
          {children}
        </div>
      )}
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
    <div className="flex flex-col gap-y-5 sm:items-center lg:items-start">
      <div className="flex sm:justify-center lg:justify-start">{children}</div>
      <p className="step-detail">{detail}</p>
    </div>
  );
};
