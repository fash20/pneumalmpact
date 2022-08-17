import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQuery } from "@mui/material";
import { theme } from "../utils/UIThemes";

const Settings = () => {
  const [selected, setSelected] = useState("a");
  return (
    <div className="min-h-[900px] grid grid-cols-1 relative w-full ">
      <SettingSVG />
      <div className="flex mb:flex-col md:flex-row  mb-space-y-5 md:space-x-5 md:space-y-0 p-8 ">
        <div className="grid grid-cols-1 w-100">
          <div className="h-44 w-44 border-8 rounded-full border-primaryTextColor  absolute bg-neutral-900 top-[5%] md:left-[5%]">
            <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-[50%] absolute bottom-0 right-3  bg-primaryTextColor">
              <CameraAltIcon sx={{ color: "#FFF" }} />
            </div>
          </div>
          <div className="mt-32 md:ml-52 md:mt-5">
            <h1 className="font-inter text-xl md:text-3xl text-primaryTextColor">
              Mobina Mirbagheri
            </h1>
            <h2 className="font-inter text-md ">
              Your account is ready, You can now apply for advice
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10 text-left w-full p-5 md:p-10">
        <Options selected={selected} setSelected={setSelected} />
        {selected === "a" && <SettingsForm />}
        {selected === "b" && <PasswordChange />}
      </div>
    </div>
  );
};

export default Settings;

interface SelectionProp {
  selected: string;
  setSelected: (selected: string) => void;
}

const Options = ({ selected, setSelected }: SelectionProp) => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      className={` ${
        isScreenSmall ? "w-full" : ""
      } flex flex-row space-x-4 md:flex-col md:space-y-5 md:space-x-0 md:justify-start items-center md:border-r-2 border-r-fadeWhite md:h-72 md: 1/4  px-10 md:mt-36`}
    >
      <Button
        className="font-inter bg-textgray"
        variant={selected === "a" ? "pneumaBlue" : null}
        style={{ width: isScreenSmall ? "100%" : "" }}
        onClick={() => {
          setSelected("a");
        }}
      >
        Edit Profile
      </Button>
      <Button
        style={{ width: isScreenSmall ? "100%" : "" }}
        variant={selected === "b" ? "pneumaBlue" : null}
        onClick={() => setSelected("b")}
      >
        Password & Security
      </Button>
    </div>
  );
};

const SettingsForm = () => {
  return (
    <div className="grid grid-cols-1 justify-center gap-y-3 items-center pt-10 w-full md:w-[60%] text-clip ">
      <h2 className="text-2xl ">Edit Profile</h2>
      <div className="grid grid-cols-1">
        <h3 className="font-inter text-base  my-4">Personal</h3>
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
        <h3 className="font-inter text-base  my-8">Contact</h3>
        <TextInput label="Email" />
        <TextInput label="Phone number" />
        <TextInput label="Country" />
        <TextInput label="City" />
      </div>

      <Button variant="pneumaBlue">Done</Button>
    </div>
  );
};

const PasswordChange = () => {
  return (
    <div className="grid grid-cols-1 justify-center  gap-y-2  items-center pt-10 w-full md:w-[60%]">
      <h3 className="font-inter text-center text-lg">Password & Security</h3>
      <div className="grid grid-cols-1 justify-center gap-y-3 items-center pt-10 w-full">
        <TextInput label="Old Password" />
        <TextInput label="New Password" />
        <TextInput label="Confirm Neww Password" />
      </div>
      <Button>Done</Button>
    </div>
  );
};
