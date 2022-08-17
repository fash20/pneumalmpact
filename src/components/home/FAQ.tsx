import { IconButton, PlusIcon } from "evergreen-ui";
import React, { useState } from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col space-y-20 px-10 bg-[#FCFCFF] md:py-20">
      <div className="text-center ">
        <span className="step-title-blue">Frequently </span>
        <span className="step-title-red">Asked </span>
        <span className="step-title-blue">Question </span>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0 justify-center ">
        <div className="flex flex-col items-center space-y-5">
          <Questions
            question="Who can apply for this program"
            answer="The PneumalImpact Programme is open to everyone from all over the country with scalable business ideas or a business and needs funding, training, and mentorship."
          />
          <Questions
            question="How much is the whole program"
            answer="The whole program costs N20,000"
          />
          <Questions
            question="How am i sure the courses will benefit me"
            answer="The courses are well researched materials by our academic department before it is listed"
          />
        </div>
        <div className="flex flex-col items-center space-y-5">
          <Questions
            question="What do I do to have access to this Program"
            answer="Click on apply and fill the spaces provided"
          />
          <Questions
            question="How long is the training"
            answer="The training phase of the programme will last for twelve (12) weeks"
          />
          <Questions
            question="Is the Funding Amount a Fixed Sum "
            answer="Yes the funding is fixed at $1,000."
          />
          <Questions
            question="How can I be Eligible for the Pnuemalpact Funds?"
            answer="Funds are given to entrepreneurs who have received the training and mentorship and meet certain participatory requirements."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
interface IQuestionProps {
  question: string;
  answer: string;
}
const Questions = ({ question, answer }: IQuestionProps) => {
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
          {question}
        </span>
        {showDetails && (
          <p className="font-smSans" style={{ color: "#6F6C90" }}>
            {answer}
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
