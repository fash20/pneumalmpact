import { Avatar } from "@material-ui/core";
import { ArrowLeftIcon, ArrowRightIcon, IconButton } from "evergreen-ui";
import React from "react";
import numberOne from "../assets/images/01.svg";
import profileImage from "../assets/images/profileimage.png";

const studenrReviews= [
  {
    name:'',
    field:'',
    review:''
  },
]

const OurReview = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="grid gap-y-16">
        <div className="text-center">
          <span className="step-title-blue">What our </span>
          <span className="step-title-red">Students </span>
          <span className="step-title-blue">say</span>
        </div>
        <div className="flex z-0 flex-col relative justify-center items-center h-[700px] ">
          <StudentReview />
          <StudentReview2 />
          <StudentReview3 />
          
        </div>
        <div className="flex space-x-3 justify-center ">
          <IconButton icon={ArrowLeftIcon} />
          <IconButton icon={ArrowRightIcon} />
        </div>
      </div>
    </div>
  );
};

export default OurReview;

const StudentReview = () => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative md:absolute box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[80%] sm:w-[550px] md:w-[650px] lg:w-[750px] shadow-2xl
      `}
      style={{zIndex:3}}
    >
      <div className="relative md:absolute h-[100px] md:left-16 ">
        <img style={{ maxHeight: "100%" }} src={numberOne} />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 mt-[5px]">
        <Avatar src={profileImage} style={{ height: 90, width: 90 }} />
        <span className="font-zcool fnt25">Chris William</span>
        <span className="font-inter">Traveler</span>
        <p className="font-zcool ">
          Outward clothes promise at gravity do excited. Sufficient particular
          impossible by reasonable oh expression is. Yet preference connection
          unpleasant yet melancholy but end appearance. And excellence
          partiality estimating terminated day everything.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};
const StudentReview2 = () => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative bottom-[20px]  md:absolute  md:bottom-[90px]  box-content  bg-white p-5 md:p-20  text-center rounded-lg mx-5 w-[70%] sm:w-[450px] md:w-[550px] lg:w-[650px] shadow-2xl h-5
      `}
      style={{zIndex:2}}
    >
      {/* </div> */}
    </div>
  );
};
const StudentReview3 = () => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative bottom-[35px] md:absolute md:bottom-[50px] box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[60%] sm:w-[350px] md:w-[450px] lg:w-[550px] shadow-2xl h-5
      `}
      style={{zIndex:1}}
    >
      {/* </div> */}
    </div>
  );
};
