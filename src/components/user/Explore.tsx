import {
  Avatar,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import courseimg from "../assets/images/courseimg.svg";
import courseCardImg from "../assets/images/course-card.svg";
import mountainImg from "../assets/images/mountain.svg";
import { TabButtonStyle, theme } from "../utils/UIThemes";
import { ReactNode, useEffect } from "react";
import Carousel from "./Carousel";
import { numberShortner } from "../utils/utilityfunctions";
import { course } from "../utils/dummydata";
import { Link } from "react-router-dom";

const Explore = () => {

  useEffect(()=>{
    document.title = "Pneumalmpact - Explore";
  })
  return (
    <div className=" grid grid-cols-1 px-5 gap-y-10 md:gap-y-20 pt:8 lg:px-6 w-fit overflow-x-hidden">
      <div className="relative max-w-full">
        <Carousel />
        <div className="absolute top: top-[78%] flex flex-col  max-w-full space-y-5 overflow-hidden">
          <h3 className="tex-xl text-white ml-6">Trending Courses</h3>
          <HScrollable />
        </div>
      </div>
      <div className="mt-10">
        <span className="p-5 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl text-gray ">Courses For You</h1>
        </span>
        <div className="grid justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {course.map((item, key) => (
            <Course
              title={item.title}
              image={item.image}
              key={key}
              properties={item.properties}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="flex space-x-7 mx-4">
          <Button size="large" style={TabButtonStyle}>
            All
          </Button>
          <Button size="large" style={TabButtonStyle}>
            Email
          </Button>
          <Button size="large" style={TabButtonStyle}>
            Copywriting
          </Button>
          {/* <Button size="large" style={TabButtonStyle}>
            Social Media
          </Button>
          <Button size="large" style={TabButtonStyle}>
            SEO
          </Button> */}
        </div>
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 md:items-start md:justify-left lg:grid-cols-3 gap-5 bg-white mb-10 md:mb-20 ">
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
  );
};

export default Explore;

interface ICarouselProps {
  img: string;
  body: ReactNode;
}

interface CourseCardProps {
  title: string;
  src?: string;
}

const CourseCard = ({ title, src }: CourseCardProps) => {
  return (
    <div className="flex flex-col space-y-3 w-[80px] mb:w-[100px]  sm:w-[150px] lg:w-[190px] shrink-0 ">
      <img
        src={src === undefined ? courseCardImg : src}
        className="rounded-3xl shadow-md"
      />
      <h4 className=" text-gray text-center">{title}</h4>
    </div>
  );
};

const HScrollable = () => {
  return (
    <div className="flex flex-row space-x-6 px-4 h-scrollable">
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
      <CourseCard title="cousrse1" />
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

interface ICourseProps {
  title?: string;
  subtitle?: string;
  image?: string;
  detail?: string;
  properties?: {
    download: number;
    status: string;
    tags: string[];
  };
}

const Course = ({
  title,
  subtitle,
  image,
  detail,
  properties,
}: ICourseProps) => {
  return (
    <div className="w-[287px] md:w-[250px] h-[250px]  p-3 grid  items-center gap-2 border-[1px] border-grayMarginColor bg-white">
      <img src={image === undefined ? courseimg : image} />
      <div className="grid grid-cols-1 gap-2 font-inter text-PrimaryGray">
        <div className="flex space-x-1 ">
          {/* <Tag title="Design" className="" /> */}
          {properties.tags.map((item, key) => (
            <Tag title={item} key={key} className={""} />
          ))}
        </div>
        <div className="py-2 h-[70px]">
          <Link to={"/course"} className='hover:underline'>
            <h4 className="text-md">{title}</h4>
          </Link>
        </div>

        <Divider />
        <div className="flex gap-2 justify-between font-interlight text-sm ">
          <h5>{numberShortner(properties.download)} downloads</h5>
          <h5>{properties.status}</h5>
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
  const tagColors = ["#41BE90", "#FFB800", "#FF5364"];
  const rand = Math.floor(Math.random() * tagColors.length);

  let _className = "";
  className === undefined
    ? (_className = `text-[11px] text-white font-interlight w-fit  px-2 py-1 bg-[${rand}]`)
    : (_className =
        `text-[11px] text-white font-interlight w-fit  px-2 py-1 bg-[${rand}]` +
        className);
  return (
    <span className={_className} style={{ backgroundColor: tagColors[rand] }}>
      {title}
    </span>
  );
};

interface ICourseCardProps {
  avatar?: string;
  title?: string;
  subtitle?: string;
}
const CourseCardBrief = ({ avatar, title, subtitle }: ICourseCardProps) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="flex justify-center items-center space-x-4 p-5 rounded-lg border-[1px] border-grayMarginColor w-fit bg-white shadow-sm">
      <div className="w-[60px] h-[60px] rounded-[50%] bg-[#f2f2f2] flex justify-center items-center">
        <Avatar
          sizes={isScreenSmall ? "medium" : "large"}
          src={mountainImg}
          alt="avatar"
        />
      </div>

      <div className="flex flex-col space-3">
        <span className="text-lg md:text-2xl lg:text-2xl">
          Email Personalisation
        </span>
        <span className=" text-sm md:text-lg lg:text-xl  text-gray text-">
          Personalised Email for Outreach
        </span>
      </div>
    </div>
  );
};
function numbershortner(): ReactNode {
  throw new Error("Function not implemented.");
}
