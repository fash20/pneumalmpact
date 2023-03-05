import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import cimage1 from "../assets/images/carousel/cimage1.png";
import cimage2 from "../assets/images/carousel/cimage2.png";
import cimage3 from "../assets/images/carousel/cimage3.png";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    image: cimage1,
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    image: cimage2,
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    image: cimage3,
  },
];

function CustomCarousel() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CustomCarousel;

function Item(props: {
  item: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal;
    description:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal;
    image: string;
  };
}) {
  return (
    <Paper>
      <div className="absolute ">
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </div>

      <img src={props.item.image} />
      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}
