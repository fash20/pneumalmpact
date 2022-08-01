import React, { useEffect, useRef, useState } from "react";
import ManWithOptions from "./animatedsvgs/ManWiithOptions";
import '../styles/animations.css'
const Target = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimatedDivVisible, setIsAnimatedDivVisible] = useState<boolean>();
  const [shouldAnimationShow, setShouldAnimationShow] = useState<boolean>(false);
  let animationId = ["",""];
  useEffect(() => {
    setTimeout(() => {
      animationId[0] = "#translateup";
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
    <div  ref={ref} className="relative grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 lg:px-28 justify-center  items-center">
      <div id= {isAnimatedDivVisible ? 'target-container' : ""}>
        <div className="text-left ">
          <span className="step-title-blue">Who is this </span>
          <span className="step-title-red">Platform </span>
          <span className="step-title-blue">for ? </span>
        </div>
        <ul className="font-poppins text-gray2 list-disc text-[18px] leading-9 tracking-wide my-5 px-4">
          <li className="mx-4 my-5">Don't have any basic entrepreneurship knowledge</li>
          <li className="mx-4 my-5">Lack funds to turn your idea into a profitable business</li>
          <li className="mx-4 my-5">Don’t have any digital skills to scale your business</li>
          <li className="mx-4 my-5">
            And you need a program to hold and guide you through every step of
            the way
          </li>
        </ul>
      </div>
      <div id= {isAnimatedDivVisible ? 'man-options' : ""} className="flex items-center justify-center">
        <ManWithOptions />
      </div>
    </div>
  );
};

export default Target;
