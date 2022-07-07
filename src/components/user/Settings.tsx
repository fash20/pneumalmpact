import { Button } from "@material-ui/core";
import React from "react";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";

const Settings = () => {
  return (
    <div className="grid grid-cols-1 mt-20 relative w-full">
      <SettingSVG />
      {/* 
      <div>
        <div className="h-40 w-40  border-4 rounded-full absolute top-[10%]"></div>
        <div>
          <h1 className="font-inter text-3xl">Mobina Mirbagheri</h1>
          <h2 className="font-inter text-xl">
            Your account is ready, You can now apply for advice
          </h2>
        </div>
      </div> 
      */}
      <div className="flex gap-5 p-8 ">
        <div className="grid grid-cols-1 w-100">
          <div
            className="h-44 w-44 border-8 rounded-full border-primaryTextColor  absolute bg-neutral-900 top-[5%] sm:left-[36%] md:left-[5%]"
          >
             
          </div>
          <Options />
        </div>

        <div className="flex flex-col sm:mt-20 md:mt-0 text-left w-full justify-center items-center">
          <div className="flex flex-col w-full items-start">
            <h1 className="font-inter text-3xl text-primaryTextColor">Mobina Mirbagheri</h1>
            <h2 className="font-inter text-xl text-primaryTextColor">
              Your account is ready, You can now apply for advice
            </h2>
            <div className="w-full font-inter flex justify-between my-10 mx-5">
              <h2 className="text-2xl text-fadeWhite">Edit Profile</h2>
              <h3 className="text-fadeWhite">Last Updated</h3>
            </div>
          </div>
          <SettingsForm />
        </div>
      </div>
    </div>
  );
};

export default Settings;

const Options = () => {
  return (
    <div className=" sm:hidden md:flex flex-col gap-5 border-r-2 border-r-fadeWhite h-72 md: 1/4  px-10 mt-36">
      <Button className='font-inter bg-textgray' style={{background:'blue', textAlign: "left" }}> Edit Profile</Button>
      <Button> Notification </Button>
      <Button> Choose Plan</Button>
      <Button> Password & Security</Button>
    </div>
  );
};

const SettingsForm = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-5 items-center pt-10 sm:w-[80%] md:w-[60%]">
      <div className="grid grid-cols-1">
        <h3 className="font-inter text-base text-fadeWhite my-4">Personal</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <TextInput label="First Name" />
          <TextInput label="Surname Name" />
        </div>
      </div>
      <div className="grid gap-3">
        <TextInput label="National Code" />
        <TextInput label="Education Level" />
      </div>
      <div>
        <h3 className="font-inter text-base text-fadeWhite my-8">Contact</h3>
        <TextInput label="Email" />
        <TextInput label="Phone number" />
        <TextInput label="Country" />
        <TextInput label="City" />
      </div>

      <Button
        style={{
          borderRadius: 40,
          height: 50,
          backgroundColor: "#2F327D",
          color: "#fff",
        }}
      >
        Done
      </Button>
    </div>
  );
};
