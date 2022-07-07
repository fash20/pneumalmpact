import React, { ReactNode } from "react";
import squarelogo from "../assets/images/square-logo.svg";
import compass from "../assets//images/compass.svg";
import CompassIcon from "../svgicons/CompassIcon";
import { Link, BrowserRouter as Router } from "react-router-dom";
import LibraryIcon from "../svgicons/LibraryIcon";
import AuditIcon from "../svgicons/AuditIcon";
import GearIcon from "../svgicons/GearIcon";
import HelpIcon from "../svgicons/HelpIcon";

const navItems = [
  {
    id: 1,
    name: "Explore",
    href: "/",
    icon: <CompassIcon />,
  },
  {
    id: 2,
    name: "Library",
    href: "/library",
    icon: <LibraryIcon />,
  },
  {
    id: 3,
    name: "Audit",
    href: "/audit",
    icon: <AuditIcon />,
  },
  {
    id: 4,
    name: "Settings",
    href: "/settings",
    icon: <GearIcon />,
  },
  {
    id: 5,
    name: "Help",
    href: "/help",
    icon: <HelpIcon />,
  },
];

const SideNav = () => {
  return (
    <div className="sticky left-0 flex flex-col w-[103px] h-[full] gap-16  border-r-[1px]  border-x-grayMarginColor">
      <a href="/">
        <img className=" h-20 bg-white" src={squarelogo} alt="logo" />
      </a>

      <div className="flex flex-col  gap-6 p-3">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            name={item.name}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

interface NavItemProps {
  name: string;
  href: string;
  icon: ReactNode;
}

const NavItem = ({ name, href, icon }: NavItemProps) => {
  return (
    <Link to={href} className=''>
      <div className="flex flex-col items-center gap-2 justify-end rounded-lg border-r-4 border-white hover:bg-lightBlue hover:border-r-4 border-primaryTextColor hover:text-base hover:text-primaryTextColor p-2">
        {icon}
        <h3 className="font-inter text-sm">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default SideNav;
