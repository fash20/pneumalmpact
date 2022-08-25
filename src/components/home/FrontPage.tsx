
import ideaImage from "../assets/images/idea.svg";
import img from "../assets/images/img.png";
import Stats from "./Stats";
import heclipse from "../assets/images/heclipse.svg";
import veclipse from "../assets/images/veclipse.svg";
import  Button  from "@mui/material/Button";
import { useScreenSize } from "../utils/useScreenSize";
import { BrandButtonStyle } from "../utils/UIThemes";


const FrontPage = () => {
  const [screenSize, isScreenSmall] = useScreenSize();

  return (
    <div
      className={`frontpage relative grid ${
        isScreenSmall ? "grid-cols-1" : "grid-cols-2"
      } px-5 md:px-10 lg:px-28 pt-24`}
    >
      {/* <div className='chord'></div> */}
      <div className="flex space-y-16 flex-col  ">
        <div className="flex-0 ">
          <img src={ideaImage} alt="pnuemalmpact" />
        </div>
        <div>
          <p className=" font-poppins text-lg  md:text-2xl text-PrimaryGray leading-10 font-thin">
            PneumaImpact has helped entrepreneurs with an idea to start a
            business while providing them skills, mentorship, and funds to get
            started.
          </p>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 ">
          <Button variant="contained" color="primary" style={BrandButtonStyle}>
            Get Started
          </Button>
          <Button variant="pneumaRed" style={BrandButtonStyle}>
            Become a Partner
          </Button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center lg:justify-start flex-row  space-x-10">
            <Stats title="Customer" value={5000} />
            <Stats title="Delivery" value={500} />
            <Stats title="Rating" value={5.000} />
          </div>
          <div className=" flex items-center justify-center ">
          {isScreenSmall && (
            <div className="flex min-w-[300px] min-h-[200px] justify-center px-28 mb:px-20 sm:px16">
            <img src={img} alt='img' className=" min-w-[140%] sm:min-w-[80%]  min-h-full m-auto block  " /> 
            </div>
          )}
          </div>
        </div>
      </div>
      {!isScreenSmall && (
        <div className="pos-relative">
          <img className="veclipse" src={veclipse} />
          <img className="heclipse" src={heclipse} />
          <div className="woman-image">
            <img src={img} alt='img' /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;