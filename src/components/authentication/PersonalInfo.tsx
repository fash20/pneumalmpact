import { Button,  Heading, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import logo from "../assets/images/pneumaImpact-logo.svg";
import enLocale from "i18n-iso-countries/langs/en.json";
import countries from "i18n-iso-countries";
import ReactFlagsSelect from "react-flags-select";
import "../styles/General.css";


const PersonalInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState("NG");

  const selectCountryHandler = (value: string) => {
    setSelectedCountry(value);
  };
  countries.registerLocale(enLocale);

  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map((key, value) => {
    return {
      label: value,
      value: key,
    };
  });

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
        <Heading size={800}>Personal Inofrmation</Heading>
      </div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className=" grid grid-cols-1">
          <TextInputField
            inputHeight={50}
            label="First Name"
            placeholder={"First Name"}
          />
          <TextInputField
            inputHeight={50}
            label="Last Name"
            placeholder="LastName"
          />
          <div className="grid gap-6 grid-cols-2">
            <div className="grid gap-2">
              <Heading size={400}>Country</Heading>
              <ReactFlagsSelect
                className="slct-cntr"
                searchable
                showOptionLabel
                countries={countryArr.map(({ label, value }) => value[0])}
                selected={selectedCountry}
                onSelect={function (countryCode: string): void {
                  selectCountryHandler(countryCode)
                
                }}
                
              />
            </div>
            <TextInputField
              inputHeight={50}
              label="State"
              placeholder={"State"}
            />
            <TextInputField
              inputHeight={50}
              label="Code"
              placeholder={"123"}
            />
            <TextInputField
              inputHeight={50}
              label="Phone Number"
              placeholder={"Phone"}
            />
          </div>
          <Button appearance="primary">Login</Button>
        </div>
        <div className="flex justify-center">
          <Heading>Have an account?</Heading>
          <Heading>Login</Heading>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
