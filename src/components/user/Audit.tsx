import { Button } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import SettingSVG from "./SettingSVG";
import Radio from "@mui/material/Radio";
import { BrandButtonStyle } from "../utils/UIThemes";
import SideNav from "../nav/SideNav";

const Audit = () => {
  return (
    <div className="grid grid-cols-1 mt-24 relative w-full">
      <SettingSVG />
      <div className="flex gap-5 p-8 ">
        <div className="grid grid-cols-1 w-100">
          <div className="h-44 w-44 border-8 rounded-full border-primaryTextColor  absolute bg-neutral-900 top-[5%] sm:left-[36%] md:left-[5%]"></div>
        </div>
      </div>
      <div className="flex space-x-5 ">
        <AuditRadioGroup />
        <BusinessNameForm />
      </div>
    </div>
  );
};

export default Audit;

const AuditRadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="w-[400px] p-9 border-[1px] border-grayMarginColor rounded-sm ">
      <div className="flex flex-col space-y-4 ">
        <div className="aud-rad-bdr relative  h-16">
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Business Name</h3>
            <h3>Your business name</h3>
          </div>
        </div>
        <div className=" aud-rad-bdr relative  h-16">
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ "aria-label": "B" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Business Name</h3>
            <h3>Your business name</h3>
          </div>
        </div>
        <div className="aud-rad-bdr relative  h-16">
          <Radio
            checked={selectedValue === "c"}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
            inputProps={{ "aria-label": "C" }}
            className="absolute top-[-18px] left-[-22px] "
            sx={{
              color: "#DBDBDB",
              "&.Mui-checked": {
                color: "#2F327D",
              },
            }}
          />
          <div className="absolute top-[-9px] pl-5">
            <h3>Business Name</h3>
            <h3>Your business name</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessNameForm = () => {
  return (
    <div className="flex flex-col space-y-10 border-[1px] border-grayMarginColor p-9 w-full justify-center ">
      <span>
        <h3>Business Name</h3>
        <h4>Your Business should be unique to what you are into</h4>
      </span>
      <TextInput label={"Business Name"} />
      <div className="flex justify-center items-center w-[full]">
        <Button variant="contained" color="primary" style={BrandButtonStyle} className="w-[50%]">
        Next
      </Button>
      </div>
      
    </div>
  );
};
const BusinessPlanForm = () => {
  return (
    <div className="flex flex-col space-y-10 border-[1px] border-grayMarginColor p-9 w-full">
      <span>
        <h3>Business Name</h3>
        <h4>Your Business should be unique to what you are into</h4>
      </span>
      <TextInput label={"Business Name"} />
      <Button variant="contained" color="primary" className="w-[50%]" style={BrandButtonStyle}>
        Next
      </Button>
    </div>
  );
};
const IDForm = () => {
  return (
    <div className="flex flex-col space-y-10 border-[1px] border-grayMarginColor p-9 w-full">
      <span>
        <h3>Business Name</h3>
        <h4>Your Business should be unique to what you are into</h4>
      </span>
      <TextInput label={"Business Name"} />
      <Button variant="contained" color="primary" className="w-[50%]" style={BrandButtonStyle}>
        Next
      </Button>
    </div>
  );
};
