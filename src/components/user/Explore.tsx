import { Avatar, Button, Divider, IconButton } from "@material-ui/core";
import React, { CSSProperties } from "react";
import courseimg from "../assets/images/courseimg.svg";
import cimage1 from "../assets/images/carousel/cimage1.svg";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import courseCardImg from "../assets/images/course-card.svg";
import mountainImg from "../assets/images/mountain.svg";
import { TabButtonStyle } from "../utils/UIThemes";
import SideNav from "../nav/SideNav";

const Explore = () => {
  return (
    <div className="flex space-x-6">
      <SideNav />
    <div className=" grid grid-cols-1 gap-16 pt-24">
      <div className="relative">
        <Carousel />
        <div className="absolute top-[78%] flex flex-col  max-w-full space-y-5 overflow-hidden">
          <h3 className="tex-xl text-white ml-6">Trending Courses</h3>
          <HScrollable />
        </div>
      </div>
      <div className="mt-40">
        <span className="p-5 ">
             <h1 className="text-4xl text-gray ">Courses For You</h1>
        </span>
       
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
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className='flex space-x-7 mx-4'>
            <Button size='large' style={TabButtonStyle} >All</Button>
            <Button size='large' style={TabButtonStyle}>Email</Button>
            <Button size='large' style={TabButtonStyle}>Copywriting</Button>
            <Button size='large' style={TabButtonStyle}>Social Media</Button>
            <Button size='large' style={TabButtonStyle}>SEO</Button>
        </div>
        <div className="grid grid-cols-3 gap-5 ">
          <CourseCardBrief />
          <CourseCardBrief />
          <CourseCardBrief />
          <CourseCardBrief />
          <CourseCardBrief />
          <CourseCardBrief />
          <CourseCardBrief />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Explore;

const Carousel = () => {
  return (
    <div className=" relative">
      <img src={cimage1} alt="carousel" className=" rounded-md" />
      <div className="absolute w-[100%] top-[45%] flex justify-between">
        <IconButton>
          <ChevronLeft fontSize={"large"} className="text-white" />
        </IconButton>
        <IconButton>
          <ChevronRight fontSize={"large"} className="text-white" />
        </IconButton>
      </div>
      <div className=" absolute flex flex-col space-y-8 items-end right-[8%] top-10 text-white">
        <span className="text-right">
          <h4 className="text-sm">SUMMER 2020</h4>
        </span>

        <h2 className=" text-4xl font-inter font-bold ">NEW COLLECTION</h2>
        <span className="w-[270px]">
          <p className=" text-gray text-sm">
            We know how large objects will act, but things on a small scale.
          </p>
        </span>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#fff", textTransform: "uppercase" }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  src?: string;
}

const CourseCard = ({ title, src }: CourseCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 min-w-[200px]">
      <img
        src={src === undefined ? courseCardImg : src}
        className="rounded-3xl shadow-md"
      />
      <h4 className=" text-gray">{title}</h4>
    </div>
  );
};

const HScrollable = () => {
  return (
    <div className="flex flex-row w-[100vw] space-x-4 px-4 overflow-x-scroll scroll-mb-44 whitespace-nowrap h-scrollale">
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
    </div>
  );
};

const Course = () => {
  return (
    <div className="w-[287px] p-3 grid gap-2 border-2 border-grayMarginColor">
      <img src={courseimg} />
      <div className="grid grid-cols-1 gap-2 font-inter text-PrimaryGray">
        <div className="flex space-x-1 ">
          <Tag title="Design" className="" />
          <Tag title="UI/UX Design" className="bg-[green] " />
        </div>
        <div className="py-2">
          <h4 className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
        </div>

        <Divider />
        <div className="flex gap-2 justify-between font-interlight text-sm ">
          <h5>24K downloads</h5>
          <h5>Available</h5>
        </div>
      </div>
    </div>
  );
};

interface TagIconProp {
  title: string;
  className: string;
}
export const Tag = ({ title, className }: TagIconProp) => {
  let _className = "";
  className === undefined
    ? (_className =
        "text-[11px] bg-red text-white font-interlight w-fit  px-2 py-1  ")
    : (_className =
        "text-[11px] bg-red text-white font-interlight w-fit  px-2 py-1 " +
        className);
  return <span className={_className}>{title}</span>;
};

const CourseCardBrief = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-5 rounded-lg border-2 border-grayMarginColor w-fit bg-white shadow-sm">
      <div className="w-[60px] h-[60px] rounded-[50%] bg-[#f2f2f2] flex justify-center items-center">
        <Avatar sizes="large" src={mountainImg} className="" />
      </div>

      <div className="flex flex-col space-3">
        <span className="text-2xl">Email Personalisation</span>
        <span className="text-lg text-gray">
          Personalised Email for Outreach
        </span>
      </div>
    </div>
  );
};
