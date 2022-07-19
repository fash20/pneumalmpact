import {TextDropdownButton } from "evergreen-ui";
import React from "react";
import courseimg from "../assets/images/courseimg.svg";
import { Avatar } from "@material-ui/core";
import SideNav from "../nav/SideNav";

const Collection = () => {
  return (
    <div className="flex space-x-6">
      <SideNav />
      <div className="mt-24 grid grid-cols-1 gap-8">
      <div className='flex justify-between'>
        <h3 className="font-interlight text-PrimaryGray text-md "> All My courses</h3>

        <div>
            <TextDropdownButton >Sort By: All categories </TextDropdownButton>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
      </div>
    </div>
  );
};

export default Collection;

const Course = () => {
  return (
    <div className="w-[287px] p-3 grid gap-2 border-[1px] border-grayMarginColor">
      <img src={courseimg} />
      <div className="grid grid-cols-1 gap-2 font-inter text-PrimaryGray">
        <h4 className="text-sm">History of Graphic Design</h4>
        <div className="flex gap-2">
        <Avatar variant="square" style={{width:25, height:25 }} src={courseimg} />
          <h4 className="text-[12px] font-interlight">History of Graphic Design</h4>
        </div>
        <div className="flex gap-2 font-interlight text-sm ">
          <h5>Lesson</h5>
          <h5>Lesson</h5>
        </div>
        <div className="font-interlight text-sm">completed</div>
      </div>
    </div>
  );
};
