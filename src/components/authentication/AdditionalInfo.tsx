import { Button,  Heading} from "evergreen-ui";
import React from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import Select from "react-dropdown-select";

const AdditionalInfo = () => {
  return (
    <div className="grid grid-cols-1 mx-10 my-10 gap-y-14 ">
      <div className="flex justify-center">
        <img
          src={logo}
          className="object-contain h-20 w-20 "
          alt="Pneumalmpact"
        />
      </div>
      <div className="text-center">
        <Heading size={800}>Area Of Business</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid gap-10 grid-cols-1 ">
          <div>
            {/* <Combobox
              inputHeight={50}
              label=""
              placeholder={"Choose one"}
              items={[]}
              style={{ width: "100%", height: 50 }}
            /> */}
            <Select
              values={[]}
              options={[]}
              labelField="Chose one"
              onChange={function (value: ("Pilot" | "Business Man")[]): void {
                throw new Error("Function not implemented.");
              }}
              style={{ width: "100%", height: 50, borderRadius:'10px' }}
            />
          </div>

          <Button appearance="primary">Next</Button>
        </div>
        <div className="flex flex-row justify-between">
          <Heading>Create an Account</Heading>
          <Heading>Forget Password?</Heading>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
