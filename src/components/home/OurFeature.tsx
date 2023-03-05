import { Button, useMediaQuery } from "@mui/material";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { theme } from "../utils/UIThemes";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";
import Transaction from "./animatedsvgs/Transaction";


const animations = ['side-one','side-two','trans-up','trans-down']

function OurFeature() {
  
  return (
    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-20 sm:px-5 px-5 md:px-10 lg:px-28 py-10">
      <div className="text-center flex flex-col space-y-8 md:space-x-10 lg:space-y-12 ">
        <div className="text-center">
          <span className="step-title-blue text-[20px]">How it </span>
          <span className="step-title-red">Works</span>
        </div>
        <div>
          {/* <p className="font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet
          </p> */}
        </div>
      </div>
      <div  className="grid gap-y-14 lg:gap-y-16">
        <StepContainer
        animationNumber={1}
          detail="The PnemaImpact Programme is open to everyone with scalable business ideas or business. Start your 
          application by filling in your details on the online form."
          title={<Title1 />}
        >
          <Application />
        </StepContainer>
        <StepContainer
        animationNumber={3}
          direction="flex-row-reverse"
          detail="The PneumaImpact training is a 12 weeks training designed to equip entrepreneurs with basic and digital 
          skills required to launch and run their businesses at an early growth stage and scale In the digital age. It covers 
          several topics including starting and scaling a business, Business management, Art of negotiations and how to seal 
          business deals using win/win ideology, How to determine your target customers and how to build a mutual relationship with them etc"
          title={<Title2 />}
        >
          <Training />
        </StepContainer>
        <StepContainer
          title={<Title3 />}
          animationNumber={1}
          detail="Upon successful completion of the Training, access to the mentorship community will be provided where seasoned mentors will be
           responsible for providing you with strategic guidance on your entrepreneurship journey.
          "
        >
          <Mentorship />
        </StepContainer>
        <StepContainer
        animationNumber={3}
          direction="flex-row-reverse"
          title={<Title4 />}
          detail="Entrepreneurs that have successfully passed the training will be eligible for grants of $1000. This is to support early growth, 
          and enhance their business operation. This fund is given to entrepreneurs who meet the participatory requirements.
          "
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
          href="/signup"
        >
          Get Started
        </Button >
      </div>
    </div>
  );
}

export default OurFeature;

const StepContainer: React.FC<Step> = (props) => {
  const { children, detail, direction, title, animationNumber } = props;
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsAnimatedDivVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.disconnect()
      }
    });
    observer.observe(ref.current);
   
    return () => {};
    // observer.unobserve(ref.current)
  }, []);

  return (
    
    <div
      id="anim"
      ref={ref}
      className={ isScreenSmall ? " flex flex-col items-center justify-center " :`flex sm:gap-x-10 md:gap-x-16  ${direction} lg:gap-x-20`}
    >
      <Step id={isAnimatedDivVisible ? animations[animationNumber] : ""} detail={detail} >
        {title}
      </Step>
      <div id={isAnimatedDivVisible? animations[animationNumber - 1] : ""} className=" sm:text-center ">
        {children}
      </div>
    </div>
  );
};

interface Step {
  children?: ReactNode;
  detail?: string;
  direction?: string;
  id?: string;
  visible?: boolean;
  title?: ReactNode;
  animationNumber?: number
}

const Step: React.FC<Step> = (props) => {
  const { children, detail, id } = props;
  return (
    <div
      id={id}
      className="flex flex-col gap-y-5 sm:items-center lg:items-start justify-start md:mt-20"
    >
      <div className="flex sm:justify-center lg:justify-center">{children}</div>
      <p className="step-detail text-center md:text-left">{detail}</p>
    </div>
  );
};

const Title1 = () => {
  return (
    <div className ="text-center font-bold text-[25px] md:text-left md:text-[30px] lg:text-[35px] w-full ">
      <span className="step-title-blue1 w-full ">Apply for the </span>
      <span className="step-title-red1"> Program</span>
    </div>
  );
};
const Title2 = () => {
  return (
    <div className="text-center font-bold text-[25px] md:text-left md:text-[30px] lg:text-[35px] w-full">
      <span className="step-title-blue1 ">Go through the </span>
      <span className="step-title-red1">Training</span>
    </div>
  );
};
const Title3 = () => {
  return (
    <div className="text-center font-bold text-[25px] md:text-left md:text-[30px]  lg:text-[35px] w-full">
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
    <div className="text-center font-bold w-full  text-[25px] md:text-left md:text-[30px] lg:text-[35px]">
      <span className="step-title-blue1">Get </span>
      <span className="step-title-red1">funds up to $1000 </span>
      <span className="step-title-blue1">to help you get </span>
      <span className="step-title-red1">started </span>
    </div>
  );
};
