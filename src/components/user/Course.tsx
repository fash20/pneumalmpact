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
    <div className="mt-5 flex flex-col gap-10 px-5  md:px-10">
      <CourseInfo />
      <div className="flex flex-col gap-5 font-medium">
        <span>
          <h3 className="font-poppins text-xl text-PrimaryGray">
            Related Courses
          </h3>
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
        <CourseTag name="Tag 1"/>
        <CourseTag name="Tag 2" />
        <CourseTag name="Tag 3" />
        <CourseTag  name="Tag 1"/>
      </div>
    </div>
  );
};

export default Course;

const CourseCard = () => {
  return (
    <div className="flex flex-col mb:w-[154px] sm:w-[170px] md:w-[200px] rounded-lg">
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
    <div className="flex flex-row gap-4 h-[95px] w-[100%] md:w-[264px] border-[1px] border-grayMarginColor rounded-lg p-1">
      <img src={book2} className="h-[w-87px] rounded-lg" />
      <div className="flex flex-col justify-center font-inter text-sm gap-3  ">
        <h3 className="font-interlight">Product Name</h3>
        <h3>$12.76</h3>
      </div>
    </div>
  );
};

interface CourseTagProp {
  name:string,
  children?: []
}
const CourseTag = ({name}:CourseTagProp) => {
  return (
    <div className="w-[100%]">
      <div><h3 className=" font-poppins text-[13px]">{name}</h3></div>
      <div className="flex flex-col space-y-2 justify-center items-center">
        <CourseCard2 />
        <CourseCard2 />
        <CourseCard2 />
      </div>
    </div>
  );
};

const CourseInfo = () => {
  return (
    <div className="flex flex-col md:flex-row  space-y-5 md:space-x-5 md:space-y-0">
      <div className="max-w-[182px] h-[270px] border-[1px] border-grayMarginColor  ">
        <img src={courseimage} />
      </div>
      <div className="flex flex-col space-5">
        <div className="flex flex-col space-y-3 md:space-y-4">
        <h2 className="font-inter text-[24px] md:text-4xl lg:text-5xl text-gray2">Sketching for Designers</h2>
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
            <h3 className=" font-interlight text:text-sm md:text-md   ">Username</h3>
          </div>

          <div className="flex font-interlight text-md items-center ">
            <FiberManualRecordRounded fontSize="small" />
            <h3 className="font-interlight text-gray"> 1 week ago </h3>
          </div>
        </div>
        </div>
        <div className="font-interlight text-xl my-5 max-w-[750px] ">
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
