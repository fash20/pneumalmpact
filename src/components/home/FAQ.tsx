import { IconButton, majorScale, PlusIcon } from "evergreen-ui";
import React, { useState } from "react";

const FAQ = () => {
  return (
    <div className="">
      <div className="text-center " style={{}}>
        <div>
          <span className="step-title-blue">Frequently </span>
          <span className="step-title-red">Asked </span>
          <span className="step-title-blue">Question </span>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <div className="grid gap-5">
          <Questions />
          <Questions />
          <Questions />
        </div>
        <div className="grid gap-5">
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
      className="flex first-letter:drop-shadow-2xl bg-white p-10 rounded-lg "
      // style={{ width: "600px"  }}
    >
      <div className="flex grow flex-col gap-y-5">
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
