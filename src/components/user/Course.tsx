import { Avatar, Button, IconButton } from "@material-ui/core";
import React from "react";
import book from "../assets/images/book.svg";
import book2 from "../assets/images/book2.svg";
import courseimage from "../assets/images/courseimage.svg";
import {
  FavoriteOutlined,
  Star,
  FiberManualRecordRounded,
} from "@material-ui/icons";

const Course = () => {
  return (
    <div className="mt-20 flex flex-col gap-10 mx-10">
      <CourseInfo />
      <div className="flex flex-col gap-5 font-medium">
        <span>
          <h3 className="font-poppins text-xl text-PrimaryGray">
            Related Courses
          </h3>
        </span>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CourseTag />
        <CourseTag />
        <CourseTag />
        <CourseTag />
      </div>
    </div>
  );
};

export default Course;

const CourseCard = () => {
  return (
    <div className="flex flex-col w-[200px] rounded-lg">
      <div className="relative rounded-lg">
        <span className="absolute font-interlight  bg-discountRed p-1  top-3 left-3 rounded-md text-[11px] text-white z-40">
          Discount -20%
        </span>

        <div className="absolute w-full h-full bg-[#000] opacity-20 rounded-lg"></div>
        <img src={book} className="rounded-t-lg" />
      </div>
      <div className="flex flex-col font-interlight p-2 bg-white border-[1px] border-grayMarginColor rounded-b-lg ">
        <h3 className="text-sm">Product Name</h3>
        <h3 className="text-sm">$ 14.34</h3>
        <div className="flex justify-end">
          <Button size="small"> BUY</Button>
        </div>
      </div>
    </div>
  );
};

const CourseCard2 = () => {
  return (
    <div className="flex flex-row gap-4 h-[95px] w-[264px] border-[1px] border-grayMarginColor rounded-lg p-1">
      <img src={book2} className="h-[w-87px] rounded-lg" />
      <div className="flex flex-col justify-center font-inter text-sm gap-3  ">
        <h3 className="font-interlight">Product Name</h3>
        <h3>$12.76</h3>
      </div>
    </div>
  );
};

const CourseTag = () => {
  return (
    <div>
      <div></div>
      <div className="flex flex-col">
        <CourseCard2 />
        <CourseCard2 />
        <CourseCard2 />
      </div>
    </div>
  );
};

const CourseInfo = () => {
  return (
    <div className="flex ">
      <div className="w-[246px]">
        <img src={courseimage} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-inter text-5xl">Sketching for Designers</h2>
        <div className=" flex font-inter ">
          <Star fontSize={"small"} />
          <Star fontSize={"small"} />
          <Star fontSize={"small"} />
          <Star fontSize={"small"} />
        </div>
        <span>
          <h2 className="font-interlight text-2xl ">Tara Liye</h2>
        </span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar style={{ width: 24, height: 24 }} />
            <h3 className=" font-interlight text-md  ">Username</h3>
          </div>

          <div className="flex font-interlight text-md items-center text-grayMarginColor">
            <FiberManualRecordRounded fontSize="small" />
            <h3 className="font-interlight"> 1 week ago </h3>
          </div>
        </div>
        <div className="font-interlight text-xl my-5 w-[720px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          penatibus arcu convallis aliquet. Facilisis viverra nec vitae diam
          nunc. Blandit malesuada nisl eget tellus pellentesque habitasse
          malesuada. Duis vitae lectus ullamcorper at. Ut tincidunt eget
          pellentesque praesent volutpat. Eget et urna praesent semper curabitur
          quam curabitur vulputate scelerisque. Eget eget massa, dignissim
          commodo viverra lectus metus, nibh quisque. Duis sapien orci, at lacus
          eget sed odio vitae massa. Gravida nulla aliquet in velit velit.
        </div>
        <Button>Download</Button>
      </div>
    </div>
  );
};
