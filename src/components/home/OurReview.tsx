import { Avatar } from "@material-ui/core";
import { ArrowLeftIcon, ArrowRightIcon, IconButton } from "evergreen-ui";
import React, {useState} from "react";
import numberOne from "../assets/images/01.svg";
import profileImage from "../assets/images/profileimage.png";
import '../styles/animations.css'

const Testimonials= [
  {
    author:'Lara J.',
    field:'',
    review:`I've never seen a complete course for enterprneus like this. Talk about 
    the finance management, the business management, Pnuema Impact got all these. I encourage
    everyone doing business or want to start any businesses to take the course and you'll never regret dong that`,
    img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
  },
  {
    author:'Francis W.',
    field:'',
    review:`I never knew how to write business plan is that simple untill I enrolled with Pneuma Impact. I was thought everything I
    needed to know about business plan. Now, my business has its ownl plan and this has made me more visible to my investors and 
    brought real life into my business. And guess what? I won te 500k grants. Thank you Pneuma Impact`,
    img:'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    author:'Funmi G.',
    field:'',
    review:`I've been wanting to start business for long but no adequate training materials for me. A friend sent Pneuma Impact link to me.
     I applied and found all the courses interesting and educating. Now, I can start my business in peace and I even have mentors from them 
     for a whole year. Thank you Pneuma Impact.`,
     img:'https://images.pexels.com/photos/7256659/pexels-photo-7256659.jpeg?cs=srgb&dl=pexels-olha-ruskykh-7256659.jpg&fm=jpg'
  },
  {
    author:'Chimezie T.',
    field:'',
    review:`The digital marketing training is all I need to move my business to the internet. I got everything from Pneuma Impact.
    Thank you also for the iPhone 13 pro max that I won. I love you Pneuma Impact 🤗
    Chimezie T`,
    img:'https://images.pexels.com/photos/2216607/pexels-photo-2216607.jpeg?cs=srgb&dl=pexels-dellon-thomas-2216607.jpg&fm=jpg'
  },
]

const OurReview = () => {
  const [testimonialCount, setTestimonialCount] = useState(0)

  const handleIncrement = () => {
   if (testimonialCount + 1 < Testimonials.length ){
    setTestimonialCount(testimonialCount+1)
   }
   else if (testimonialCount + 1 === Testimonials.length){
    setTestimonialCount(0)
   }
  }
  const handleDecrement = () => {
   if (testimonialCount > 0 ){
    setTestimonialCount(testimonialCount - 1)
   }
   else if (testimonialCount  <= 0 ){
    setTestimonialCount(Testimonials.length-1)
   }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="grid gap-y-16">
        <div className="text-center">
          <span className="step-title-blue">What our </span>
          <span className="step-title-red">Students </span>
          <span className="step-title-blue">say</span>
        </div>
        <div className="flex z-0 flex-col relative justify-center items-center h-[700px] ">
          <StudentReview testimonial={Testimonials[testimonialCount]} count={testimonialCount} />
          <StudentReview2 />
          <StudentReview3 />
          
        </div>
        <div className="flex space-x-3 justify-center ">
          <IconButton icon={ArrowLeftIcon} onClick={handleDecrement} />
          <IconButton icon={ArrowRightIcon} onClick={handleIncrement} />
        </div>
      </div>
    </div>
  );
};

export default OurReview;


interface TestimonialProp  {
  testimonial? :{
  author : string
  field : string
  review : string
  img:string
  }
  count: number
}

const StudentReview = ({testimonial, count}:TestimonialProp) => {
  return (
    // <div className={`${className}`}>
    <div
      className={` relative md:absolute box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[80%] sm:w-[550px] md:w-[650px] lg:w-[750px] bx-shw
      `}
      style={{zIndex:3}}
    >
      <div className="relative md:absolute flex font-extrabold items-center justify-center h-[100px] md:left-16 text-[130px] text-[#DBDAFF] ">
        {/* <img style={{ maxHeight: "100%" }} src={numberOne} /> */}
        0{
          count + 1 
        }
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 mt-[5px]">
        <Avatar src={testimonial.img} style={{ height: 90, width: 90 }} />
        <span className="font-zcool fnt25 h-[20px]">{testimonial.author}</span>
        <span className="font-inter">{testimonial.field}</span>
        <p id='fade-in' className="font-zcool text-md h-[220px] mb:h-[200px] md:h-[160px] lg:h-[100px] ">
          {
            testimonial.review
          }
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
      className={` relative bottom-[20px]  md:absolute  md:bottom-[90px]  box-content  bg-white p-5 md:p-20  text-center rounded-lg mx-5 w-[70%] sm:w-[450px] md:w-[550px] lg:w-[650px]  bx-shw h-5
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
      className={` relative bottom-[35px] md:absolute md:bottom-[50px] box-content  bg-white p-5 md:p-20 text-center rounded-lg mx-5 w-[60%] sm:w-[350px] md:w-[450px] lg:w-[550px]  bx-shw h-5
      `}
      style={{zIndex:1}}
    >
      {/* </div> */}
    </div>
  );
};
