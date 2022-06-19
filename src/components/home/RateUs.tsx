import { Textarea, TextInputField, Button, Pane, Label } from "evergreen-ui";
import React from "react";

const RateUs = () => {
  return (
    <div className="grid grid-cols-2 mx-24 gap-x-20">
      <div>
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
    <div className="grid grid-cols-1 gap-5 p-10 bg-white rounded-xl " style={{border:"2px solid #EEE"}}>
      <TextInputField label="Name" inputHeight={50} />
      <TextInputField label="Email" inputHeight={50} />
      <Pane>
        <Label htmlFor="textarea-1" marginBottom={8} display="block">
          Additional Feedback
        </Label>
        <Textarea
          id="textarea-1"
          name="textarea-1"
          placeholder="Write message..."
        />
      </Pane>
      <Button appearance="primary" style={{fontSize:'15px'}}> Submit </Button>
    </div>
  );
};
