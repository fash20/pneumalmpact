import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useScreenSize } from "../utils/useScreenSize";
import Application from "./animatedsvgs/Application";
import Mentorship from "./animatedsvgs/Mentorship";
import Training from "./animatedsvgs/Training";
import Transaction from "./animatedsvgs/Transaction";


function OurFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>()
  const [shouldAnimationShow, setShouldAnimationShow] = useState<boolean>()
  let animationId = ''



  useEffect(() => {

    setTimeout(()=> {
      animationId = '#diagonal-one'
    }, 5000)
    const observer  =  new IntersectionObserver(entries=> {
        const entry = entries[0];
        setIsAnimatedDivVisible(entry.isIntersecting);
    })
    observer.observe(ref.current)

    return () => {
      
    }
  }, [])
  
  return (
    <div className="sm:px-5 ">
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
      <div ref={ref}  className="grid ">
        <StepContainer visible={isAnimatedDivVisible}  detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
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
  const { children, detail, direction, ref, visible } = props;

  return (
    <div
      id="anim"
      ref={ref}
      className={`flex flex-row sm:gap-x-20 md:gap-x-24 xl:gap-x-40 ${direction} items-center justify-between`}
    >
     
      <Step id={visible ? `diagonal-two`:''} detail={detail}>
        <div className="">
          <span className="step-title-blue1">Apply for the </span>
          <span className="step-title-red1">program</span>
        </div>
      </Step>
      {!isScreenSmall && (
        <div id={visible ? `diagonal-one`:''} className="sm:text-center ">
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
  id ? : string
  ref?: React.MutableRefObject<undefined>
  visible?: boolean
}

const Step: React.FC<Step> = (props) => {
  const { children, detail, id } = props;
  return (
    <div id={id} className="flex flex-col gap-y-5 sm:items-center lg:items-start">
      <div  className="flex sm:justify-center lg:justify-start">{children}</div>
      <p    className="step-detail">{detail}</p>
    </div>
  );
};
