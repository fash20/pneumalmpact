import  Button from"@mui/material/Button"
import React from "react";
import SideNav from "../nav/SideNav";
import CustomButton from "../ui/CustomButton";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";



const Settings = () => {
  return (
    <div className="grid grid-cols-1 mt-24 relative w-full">
      {/* <SettingSVG /> */}
      <div className="flex mb:flex-col md:flex-row  mb-space-y-5 md:space-x-5 md:space-y-0 p-8 ">
        <div className="grid grid-cols-1 w-100">
          <div className="h-44 w-44 border-8 rounded-full border-primaryTextColor  absolute bg-neutral-900 top-[5%] sm:left-[36%] md:left-[5%]"></div>
          <div className=''>
            <h1 className="font-inter text-3xl text-primaryTextColor">
              Mobina Mirbagheri
            </h1>
            <h2 className="font-inter text-xl text-primaryTextColor">
              Your account is ready, You can now apply for advice
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10 text-left w-full p-5 md:p-10">
          <Options />
          <SettingsForm />
        </div>
    </div>
  );
};

export default Settings;

const Options = () => {
  return (
    <div className="mb:flex flex-row md:flex-col gap-5 border-r-2 border-r-fadeWhite h-72 md: 1/4  px-10 mt-36">
      <Button
        className="font-inter bg-textgray"
        variant="pneumaRed"
      >
        Edit Profile
      </Button>
      <Button variant="dashed"> Password & Security</Button>
      <CustomButton title="cick" />
    </div>
  );
};

const SettingsForm = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-y-3 items-center pt-10 sm:w-[80%] md:w-[60%]">
      <h2 className="text-2xl text-fadeWhite">Edit Profile</h2>
      <div className="grid grid-cols-1">
        <h3 className="font-inter text-base text-fadeWhite my-4">Personal</h3>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4">
          <TextInput label="First Name" />
          <TextInput label="Surname Name" />
        </div>
      </div>
      <div className="grid gap-y-3">
        <TextInput label="National Code" />
        <TextInput label="Education Level" />
      </div>
      <div className="grid gap-y-3">
        <h3 className="font-inter text-base text-fadeWhite my-8">Contact</h3>
        <TextInput label="Email" />
        <TextInput label="Phone number" />
        <TextInput label="Country" />
        <TextInput label="City" />
      </div>

      <Button
        variant='pneumaBlue'
      >
        Done
      </Button>
    </div>
  );
};
