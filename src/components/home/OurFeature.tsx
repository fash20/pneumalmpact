import { Button, useMediaQuery } from "@mui/material";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { theme } from "../utils/UIThemes";
import { useScreenSize } from "../utils/useScreenSize";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";
import Transaction from "./animatedsvgs/Transaction";

function OurFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>();
  const [shouldAnimationShow, setShouldAnimationShow] = useState<boolean>(false);
  let animationId = "";

  useEffect(() => {
    setTimeout(() => {
      animationId = "#diagonal-one";
    }, 5000);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsAnimatedDivVisible(entry.isIntersecting);
      setShouldAnimationShow(true)

    });
    observer.observe(ref.current);

    return () => {};
  }, []);

  return (
    <div className="grid grid-cols-1 gap-y-10 lg:gap-y-20 sm:px-5 px-5 md:px-10 lg:px-28 py-10">
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
      <div ref={ref} className="grid gap-y-8 lg:gap-y-16">
        <StepContainer
          visible={isAnimatedDivVisible}
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
           consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title={<Title1 />}
        >
          <Application />
        </StepContainer>
        <StepContainer
          direction="flex-row-reverse"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
           consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title={<Title2 />}
        >
          <Training />
        </StepContainer>
        <StepContainer
          title={<Title3 />}
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Mentorship />
        </StepContainer>
        <StepContainer
          direction="flex-row-reverse"
          title={<Title4 />}
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Transaction />
        </StepContainer>
      </div>
      <div className="w-ful mt-10 text-center">
        <Button
          className="w-[50%] lg:w-[40%] h-[50px] rounded-lg"
          size="large"
          style={{ borderRadius: "40px" }}
          variant="pneumaBlue"
        >
          {" "}
          Get Started{" "}
        </Button>
      </div>
    </div>
  );
}

export default OurFeature;

const StepContainer: React.FC<Step> = (props) => {
  const { children, detail, direction, title, ref, visible } = props;
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    
    <div
      id="anim"
      ref={ref}
      className={ isScreenSmall ? " flex flex-col " :`flex sm:gap-x-10 md:gap-x-16  ${direction} lg:gap-x-20 items-center justify-between`}
      // className={`flex   ${direction} items-center justify-between`}
    >
      <Step id={visible ? `diagonal-two` : ""} detail={detail}>
        {title}
      </Step>
      {/* {!isScreenSmall && ( */}
      <div id={visible ? `diagonal-one` : ""} className="sm:text-center ">
        {children}
      </div>
      {/* )} */}
    </div>
  );
};

interface Step {
  children?: ReactNode;
  detail?: string;
  direction?: string;
  id?: string;
  ref?: React.MutableRefObject<undefined>;
  visible?: boolean;
  title?: ReactNode;
}

const Step: React.FC<Step> = (props) => {
  const { children, detail, id } = props;
  return (
    <div
      id={id}
      className="flex flex-col gap-y-5 sm:items-center lg:items-start"
    >
      <div className="flex sm:justify-center lg:justify-start">{children}</div>
      <p className="step-detail">{detail}</p>
    </div>
  );
};

const Title1 = () => {
  return (
    <div className="text-center text-[20px] md:text-[25px] lg:text-[35px]">
      <span className="step-title-blue1 ">Apply for the </span>
      <span className="step-title-red1">Program</span>
    </div>
  );
};
const Title2 = () => {
  return (
    <div className="text-center text-[20px] md:text-[25px] lg:text-[35px]">
      <span className="step-title-blue1 ">Go through the </span>
      <span className="step-title-red1">Training</span>
    </div>
  );
};
const Title3 = () => {
  return (
    <div className="text-center text-[20px] md:text-[25px] lg:text-[35px]">
      <span className="step-title-blue1">Get </span>
      <span className="step-title-red1">mentorship </span>
      <span className="step-title-blue1">
        to help you with every step of the </span>
      <span className="step-title-red1">way </span>
    </div>
  );
};
const Title4 = () => {
  return (
    <div className="text-center  text-[20px] md:text-[25px] lg:text-[35px]">
      <span className="step-title-blue1">Get </span>
      <span className="step-title-red1">funds up to $1000 </span>
      <span className="step-title-blue1">to help you get </span>
      <span className="step-title-red1">started </span>
    </div>
  );
};
