import { IconButton, majorScale, PlusIcon } from "evergreen-ui";
import React, { useState } from "react";

const FAQ = () => {
  
  return (
    <div className="flex flex-col bg-grdnt space-y-20 p-10">
      <div className="text-center " >
          <span className="step-title-blue">Frequently </span>
          <span className="step-title-red">Asked </span>
          <span className="step-title-blue">Question </span>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0 justify-center ">
        <div className="flex flex-col items-center space-y-5">
          <Questions question="Who can apply for this program"/>
          <Questions question="How much is the whole program"/>
          <Questions question="How am i sure the courses will benefit me" />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Questions question='What do I do to have access to this Program' />
          <Questions question ="How long is the training" />
          <Questions question="is the Funding Amount a Fixed Sum  "/>
          <Questions question="How can I be Eligible for the Pnuemalpact Funds?"/>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
interface IQuestionProps{
  question: string
}
const Questions = ({question}:IQuestionProps) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex first-letter drop-shadow-xl bg-white p-10 rounded-2xl w-[350px] md:w-[400px] lg:w-[500px] "
      // style={{ width: "600px"  }}
    >
      <div className="flex grow flex-col gap-y-5  ">
        <span
          className="font-smSans font-bold text-md md:tex-lg lg:text-xl "
          style={{ color: "#170F49" }}
        >
         {
          question
         }
        </span>
        {showDetails && (
          <p className="font-smSans" style={{ color: "#6F6C90" }}>
            The Pneumalmpact Programme is open to everyone from all over the
            country with scalable business ideas or a business and needs
            funding, training, and mentorship
          </p>
        )}
      </div>
      <div className="flex-none pl-5">
        <IconButton
          icon={PlusIcon}
          size="large"
          onClick={() => setShowDetails(!showDetails)}
        />
      </div>
    </div>
  );
};
