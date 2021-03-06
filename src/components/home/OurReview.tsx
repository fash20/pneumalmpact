import { Avatar } from "@material-ui/core";
import { ArrowLeftIcon, ArrowRightIcon, IconButton } from "evergreen-ui";
import React from "react";
import numberOne from "../assets/images/01.svg";
import profileImage from '../assets/images/profileimage.png'

const OurReview = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className="grid gap-y-24">
        <div className="text-center">
          <span className="step-title-blue">What our </span>
          <span className="step-title-red">Students </span>
          <span className="step-title-blue">say</span>
        </div>
        <div className="flex justify-center ">
          <StudentReview />
        </div>
        <div className="flex gap-x-3 justify-center ">
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
    <div className="bg-white p-10 text-center rounded-lg  drop-shadow-2xl sm:w-full sm:mx-5 md:w-[600px]">
      <div className="absolute h-[100px] left-16 ">
        <img style={{ maxHeight: "100%",}} src={numberOne} />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 mt-[5px]">
        <Avatar src={profileImage} style={{height: 90, width:90}} />
        <span className="font-zcool fnt25">Chris William</span>
        <span className="font-inter">Traveler</span>
        <p className="font-zcool ">
          Outward clothes promise at gravity do excited. Sufficient particular
          impossible by reasonable oh expression is. Yet preference connection
          unpleasant yet melancholy but end appearance. And excellence
          partiality estimating terminated day everything.
        </p>
      </div>
    </div>
  );
};
