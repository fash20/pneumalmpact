import React, { useState } from "react";
import "../styles/General.css";
import CountUp from "react-countup";
import { useSpring, to, animated } from "react-spring";
import { config } from "process";

interface Stats {
  title?: string;
  value?: number;
}

const Stats: React.FC<Stats> = (props) => {
  const { title, value } = props;

  return (
      <div className="flex flex-col stats gap-2 p-4 w-[100px]">
        <CountUp
          start={0}
          end={value}
          duration={3}
          separator=","
          decimals={0}
          decimal=","
          prefix=""
          suffix="+"
          className="sm:text-xl md:text-2xl lg:text-3xl"
      />
        <span className="sm:text-sm md:text-md lg:text-xl">{title}</span>
      </div>
  );
};

export default Stats;
