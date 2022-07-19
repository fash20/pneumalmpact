import React, { ReactNode, useEffect } from "react";
import bioImg from "../assets/images/bioimg.svg";
import { AirplanemodeActiveSharp } from "@material-ui/icons";
import TextInput from "../ui/TextInput";
import { Button, TextField } from "@material-ui/core";

const About = () => {
  useEffect(() => {
    document.title= 'Pneumalmpact - About';
  }, []);
  return (
    <div className="flex flex-col pt-28 bg-aboutBlue ">
      <div className="flex justify-center sm:flex-col sm:space-y-5 lg:flex-row lg:space-x-10 h-fit py-20  px-20">
        <div className="h-100 w-[526px]">
          <img src={bioImg} />
        </div>
        <Bio />
      </div>
      <div className="flex flex-col space-y-5 bg-white px-20 py-40">
        <div className="flex justify-center items-center space-x-5">
          <CustomCard children="" />
          <CustomCard children="" />
          <CustomCard children="" />
          <CustomCard children="" />
        </div>
        <div className="flex justify-center items-center   space-x-5">
          <CustomCard children="" />
          <CustomCard children="" />
          <CustomCard children="" />
        </div>
      </div>
      <div className="bg-white px-20 py-40">
         <ReachUsForm />
      </div>

    </div>
  );
};

export default About;

const Bio = () => {
  return (
    <div className="max-w-[665px] flex flex-col gap-5">
      <h1 className="text-bold text-4xl ">Company's Bio</h1>

      <div className=" flex flex-col line-ht30 font-interlight">
        <p>
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for change. Completely streamline functionalized models and
          out-of-the-box functionalities. Authoritatively target proactive
          vortals vis-a-vis exceptionalresults. Compellingly brand emerging
          sources and compelling materials. Globally iterate parallel content
        </p>
        <h3 className="font-inter text-sm font-bold my-5">
          Ortals vis-a-vis exceptionalresults
        </h3>
        <p>
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts
        </p>
      </div>
    </div>
  );
};

interface CustomCardProps {
  children: ReactNode;
}

const CustomCard = ({ children }: CustomCardProps) => {
  return (
    <div className="flex flex-col justify-center space-y-10 items-center w-80 bg-lightBlue text-primaryTextColor hover:text-white hover:bg-primaryTextColor max-w-[268px] h-[152px] rounded-lg">
      <div>
        <AirplanemodeActiveSharp fontSize="large" />
      </div>
      <div>
        <h1>Service 6</h1>
      </div>
    </div>
  );
};

const ReachUsForm = () => {
  return (
    <div className="px-5 flex flex-col space-y-8 lg:space-y-16 ">
      <h1 className="text-3xl font-bold text-center">
        You can reach out to Us
      </h1>
      <div className="flex  sm:flex-col sm: space-y-5  lg:flex-row lg:space-x-5 ">
        <div className="flex space-y-5 flex-col sm:w-[100%] lg:w-[35%] leading-8">
          <p>
            apidiously reconceptualize visionary imperatives without 24/365
            catalysts for change. Completely streamline functionalized models
            and out-of-the-box functionalities. Authoritatively target
          </p>
          <span> name@pneumalmpact.com </span>
          <span> +234 2342 32424 </span>
          <span> Hilltop towers foor 12 V.I Lagos Nigeria </span>
          <div>
            <span>Follow us on:</span>
          </div>
        </div>
        <div className="flex flex-col space-y-5 sm:w-[100%] lg:w-[65%]">
          <div className="grid grid-cols-2 space-x-5 ">
            <TextField variant="outlined" placeholder="Name" />
            <TextField variant="outlined" placeholder="E-mail" />
          </div>
          <TextField variant="outlined" placeholder="Subject" />
          <TextField disabled variant="outlined" multiline />
          <div className="flex justify-end">
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
