import React from 'react'
import ideaImage from "../assets/images/idea.svg";
import womanImage from "../assets/images/woman.svg";
import Stats from "./Stats";
import heclipse from "../assets/images/heclipse.svg";
import veclipse from "../assets/images/veclipse.svg";
import { Button } from "@material-ui/core"
import { useScreenSize } from '../utils/useScreenSize';
import { BrandButtonStyle } from '../utils/UIThemes';

const FrontPage = () => {

  const [screenSize, isScreenSmall] = useScreenSize();

  return (
    <div className={`frontpage relative grid ${isScreenSmall? 'grid-cols-1': 'grid-cols-2'}  sm:px-5 md:px-10 lg:px-28 pt-24` }>
    {/* <div className='chord'></div> */}
    <div className="flex space-y-16 flex-col  ">
      <div className="flex-0 ">
        <img src={ideaImage} alt="pnuemalmpact" />
      </div>
      <div>
        <p className=" font-poppins sm:text-xl md:text-2xl text-PrimaryGray leading-10 font-thin">
          PneumaImpact has helped entrepreneurs with an idea to start a
          business while providing them skills, mentorship, and funds to get
          started.
        </p>
      </div>
      <div className="flex space-x-4">
        <Button variant='contained' color='primary' style={BrandButtonStyle} >
          Get Started
        </Button>
        <Button variant='contained'  style={BrandButtonStyle} >
          Become a Partner
        </Button>
      </div>
      <div>
        <div className="flex items-center sm:flex-row md:flex-row lg:flex-row space-x-10">
          <Stats title="Customer" value={50000} />
          <Stats title="Delivery" value={500} />
          <Stats title="Rating" value={5000} />
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