import { TextareaAutosize, TextField,Button } from "@material-ui/core";
import { Textarea, TextInputField, Pane, Label } from "evergreen-ui";
import React from "react";
import TextInput from "../ui/TextInput";
import { BrandButtonStyle } from "../utils/UIThemes";

const RateUs = () => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-20 bg-grdnt sm:px-5 md:px-10 lg:px-28">
        <div className="mb-28">
          <div>
            <span className="step-title-blue">
              Fill the form to submit your </span>
            <span className="step-title-red">feedback </span>
          </div>
          <div>
            <p className="hiw-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet
            </p>
          </div>
        </div>
      <div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default RateUs;

const FeedbackForm = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-10 bg-white rounded-xl m-10 border-2 border-grayMarginColor ">
      <TextInput label="Name" TextFieldClassName="bg-blue"/>
      <TextInput label="Email" />
      {/* <TextInputField label="Email" inputHeight={50} /> */}
      <div>
        <textarea
          id="textarea-1"
          name="textarea-1"
          placeholder="Write message..."
          className='w-full p-2 font-interlight border-[1px] border-primaryTextColor outline-primaryTextColor'
        />
      </div>
      <Button color="primary" variant='contained'  style={BrandButtonStyle}> Submit </Button>
    </div>
  );
};
