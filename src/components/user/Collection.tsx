import { TextDropdownButton } from "evergreen-ui";
import React from "react";
import courseimg from "../assets/images/courseimg.svg";
import { Avatar } from "@material-ui/core";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, LinearProgress, LinearProgressProps, Typography } from "@mui/material";
import { course } from "../utils/dummydata";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Collection = () => {
  return (
    <div className="mb-24 grid grid-cols-1 gap-8 lg:mx-6 w-[100%">
      <div className="flex justify-between">
        <h3 className="font-interlight text-PrimaryGray text-md ">
          All My courses
        </h3>

        <div>
          <TextDropdownButton>Sort By: All categories </TextDropdownButton>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full">
        {
          course.map((item,key)=> (
            <Course title={item.title} author={item.author} key={key} properties={item.properties} image={item.image}   />
          ))
        }
      </div>
    </div>
  );
};

export default Collection;

interface ICourseProps{
  title?:string,
  subtitle?: string,
  image?:string
  detail?: string,
  properties?: {
    download: number
    status:string
    tags:string[]
    completionStatus:number
  },
  author?:{
    name:string,
    avartar:string
  }

}

const Course = ({title, subtitle, image, detail, properties, author}:ICourseProps) => {
  return (
    <div className="w-[287px] md:w-[250px] h-[300px] p-3 grid gap-2 border-[1px] border-grayMarginColor">
      <img src={image} />
      <div className="grid grid-cols-1 gap-4 font-inter text-PrimaryGray">
        <h4 className="text-sm h-[70px]">{title}</h4>
        <div className="flex space-x-2 items-center">
          <Avatar
            variant="square"
            style={{ width: 25, height: 25 }}
            // src={author.avatar}
          />
          <h4 className="text-[12px] font-interlight">
          {
            author.name
          }
          </h4>
        </div>
        <div className="flex gap-2 font-interlight text-sm ">
          <span className="flex space-x-1 "><ImportContactsIcon className='text-primaryTextColor' fontSize="small" /> <h5>Leson 12</h5></span>
          <span className="flex space-x-1"><AccessTimeIcon   className='text-primaryTextColor' fontSize="small" /> <h5>25min</h5></span>
        </div>
        <div className="font-interlight text-sm"> {
          properties.completionStatus === 100 ? 
          <span><CheckCircleIcon color='success' fontSize='small' /> Completed</span>: <LinearProgressWithLabel value={properties.completionStatus} />
        } </div>
      </div>
    </div>
  );
};

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color={props.value < 50 ? 'warning':'success'} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
