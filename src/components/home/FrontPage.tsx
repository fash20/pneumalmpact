import React from 'react'
import ideaImage from "../assets/images/idea.svg";
import womanImage from "../assets/images/woman.svg";
import Stats from "./Stats";
import heclipse from "../assets/images/heclipse.svg";
import veclipse from "../assets/images/veclipse.svg";
import { Button } from 'evergreen-ui';
import { useScreenSize } from '../utils/useScreenSize';

const FrontPage = () => {

  const [screenSize, isScreenSmall] = useScreenSize();

  return (
    <div className={`grid ${isScreenSmall? 'grid-cols-1': 'grid-cols-2'}`} >
    <div className="flex gap-y-10 flex-col ">
      <div className="flex-0 ">
        <img src={ideaImage} alt="pnuemalmpact" />
      </div>
      <div>
        <p className="poppins about-pneuma">
          PneumaImpact has helped entrepreneurs with an idea to start a
          business while providing them skills, mentorship, and funds to get
          started.
        </p>
      </div>
      <div className="flex gap-x-4 ">
        <Button appearance="primary" height={50}>
          Get Started
        </Button>
        <Button appearance="secondary" height={50}>
          Become a Partner
        </Button>
      </div>
      <div>
        <div className="flex justify-center flex-row gap-10">
          <Stats title="Customer" value={"5,0000"} />
          <Stats title="Delivery" value={"5,0000"} />
          <Stats title="Rating" value={"5,0000"} />
        </div>
      </div>
    </div>
   { !isScreenSmall && <div className="pos-relative">
      <img className="veclipse" src={veclipse} />
      <img className="heclipse" src={heclipse} />
      <img src={womanImage} className="woman-image" alt="woman" />
    </div>
    }
  </div>
  )
}

export default FrontPage