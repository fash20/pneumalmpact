import { IconButton, majorScale, PlusIcon } from "evergreen-ui";
import React, { useState } from "react";

const FAQ = () => {
  
  return (
    <div className="flex flex-col bg-grdnt gap-20 p-10">
      <div className="text-center " style={{}}>
          <span className="step-title-blue">Frequently </span>
          <span className="step-title-red">Asked </span>
          <span className="step-title-blue">Question </span>
      </div>
      <div className="flex sm:flex-col lg:flex-row gap-8 justify-center lg:gap-y-36 ">
        <div className="flex flex-col gap-5">
          <Questions />
          <Questions />
          <Questions />
        </div>
        <div className="flex flex-col gap-5">
          <Questions />
          <Questions />
          <Questions />
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Questions = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      className="flex first-letter drop-shadow-xl bg-white p-10 rounded-2xl sm:w-[400px] md: w-[400px] lg:w-[500px] "
      // style={{ width: "600px"  }}
    >
      <div className="flex grow flex-col gap-y-5  ">
        <span
          className="font-smSans font-bold text-xl"
          style={{ color: "#170F49" }}
        >
          Who can apply for this program?
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
