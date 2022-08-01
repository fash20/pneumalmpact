import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pt-28 w-full flex flex-col items-center justify-center space-y-10">
        <div className=" text-[45px] font-bold ">404</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="381"
    //   height="400"
    className=" max-w-[381px] max-h-[400px]"
      fill="none"
      viewBox="0 0 381 400"
    >
      <g id="Frame" clipPath="url(#clip0_735_12968)">
        <g id="Group">
          <path
            id="Vector"
            fill="#fff"
            d="M242 100.6c12.8-6.4 28.4-5.8 41.7-.5 13.3 5.3 24.5 15 33.8 25.9 6.6 7.9 12.6 16.9 14 27.1 2.1 16.1-7.7 31.4-19.6 42.3-10.5 9.6-23.4 17.1-37.4 19.2-15.6 2.4-28.3-2.8-37.9-12-10.9-10.5-17.7-26.3-20.1-42.1-.7-4.3-1-8.6-1-12.8.1-18.9 9.6-38.6 26.5-47.1z"
          ></path>
          <path
            id="Vector_2"
            fill="#E6E6E6"
            d="M307.9 181.6c5.2-7.4 8.5-16.1 7.3-25-1.1-8.5-6.1-15.9-11.6-22.4-7.7-9-17-17-28-21.4-11-4.4-23.9-4.9-34.5.4-3.2 1.6-6.1 3.7-8.6 6.1 3.6-5.4 8.4-10 14.2-12.9 10.6-5.3 23.5-4.8 34.5-.4 11 4.4 20.3 12.4 28 21.4 5.5 6.5 10.4 14 11.5 22.4 1.7 11.7-4.5 23.1-12.8 31.8z"
          ></path>
          <path
            id="Vector_3"
            fill="#333"
            d="M267.099 217.6c-12 0-23-4.5-32.1-13.3-10.6-10.3-18.2-26.1-20.8-43.5-.7-4.2-1-8.7-1-13.1 0-21.1 11.2-40.9 27.7-49.2 12.7-6.3 28.6-6.6 43.6-.6 12.2 4.9 23.9 13.8 34.7 26.6 5.5 6.5 12.9 16.5 14.5 28.3 1.9 14.7-5.5 30.8-20.4 44.4-12 10.9-25.3 17.8-38.6 19.8-2.4.4-5 .6-7.6.6zm-24-114.9c-15 7.5-25.1 25.6-25.1 45 0 4.2.3 8.4.9 12.4 2.4 16.4 9.5 31.3 19.4 40.8 10.1 9.7 22.1 13.5 35.9 11.4 15.6-2.4 28.3-11.5 36.1-18.7 13.7-12.5 20.6-27.2 18.9-40.3-1.4-10.6-8.3-19.9-13.4-25.9-10.3-12.1-21.4-20.6-32.9-25.2-13.6-5.4-28.5-5.2-39.8.5z"
          ></path>
          <path
            id="Vector_4"
            fill="#fff"
            d="M64.3 98.3c9.4-4.1 20.2-3.7 30.4-2.1 14.2 2.3 28.2 6.9 39.7 15.5 11.4 8.6 20 21.7 21.2 35.9 1.5 18.9-10.4 37.2-26.6 47-17 10.4-39.8 15.5-58.6 10.3-12.6-3.5-23.3-11.7-29.2-26-1.2-2.8-2.1-5.7-2.8-8.7-2.6-10.8-2.2-22.3-.1-33.2 3.1-15.8 11.2-32.1 26-38.7z"
          ></path>
          <path
            id="Vector_5"
            fill="#E6E6E6"
            d="M131.7 182.3c7.9-8.5 12.8-19.6 11.9-31.1-1-12.1-8.3-23.1-17.9-30.4-9.7-7.3-21.6-11.2-33.5-13.1-8.6-1.4-17.8-1.7-25.7 1.8-2 .9-3.8 1.9-5.5 3.2 3-3.5 6.6-6.4 10.9-8.3 8-3.5 17.1-3.2 25.7-1.8 12 1.9 23.9 5.8 33.5 13.1 9.7 7.3 16.9 18.3 17.9 30.4 1.2 14-6.3 27.5-17.3 36.2z"
          ></path>
          <path
            id="Vector_6"
            fill="#333"
            d="M86.4 209.3c-5.8 0-11.4-.7-16.6-2.2-14.4-4-25-13.5-30.8-27.3-1.2-2.9-2.2-6-2.9-9.1-2.5-10.3-2.5-21.8-.1-34.2 3.9-19.7 13.9-34.4 27.4-40.4 11-4.8 23.4-3.6 31.7-2.3 16.501 2.6 30.201 8 40.701 15.9 12.9 9.8 21 23.5 22.1 37.6 1.4 18.5-9.7 38.3-27.7 49.2-13.6 8.4-29.3 12.8-43.8 12.8zM65.2 100.4c-12.1 5.4-21.1 18.9-24.7 37.1-2.3 11.7-2.2 22.5.1 32.2.7 2.8 1.6 5.7 2.7 8.4 5.2 12.5 14.8 21 27.7 24.6 16.8 4.7 39.101.7 56.701-10 16.6-10.1 26.8-28.1 25.5-44.9-1-12.6-8.6-25.4-20.3-34.3-9.9-7.5-22.9-12.5-38.6-15-7.8-1.2-19.2-2.4-29.1 1.9z"
          ></path>
          <path
            id="Vector_7"
            fill="#333"
            d="M216.6 160.5c3.3-1.3 6.8-1.8 10.3-1.4 11 1.5 19.7 12 19.9 23.1.1 7.6-4 15.7-10.2 20.5-10.8-10.6-17.7-26.3-20-42.2z"
          ></path>
          <path
            id="Vector_8"
            fill="#333"
            d="M38.4 170.3c2.8-3 6.5-5.2 10.5-6 10.8-2.3 22.6 4.6 26.5 15 3.1 8.3 1.1 19.1-5 25.7-12.6-3.5-23.3-11.7-29.2-26-1.2-2.9-2.1-5.8-2.8-8.7z"
          ></path>
          <path
            id="Vector_9"
            fill="#333"
            d="M210 349.1c-1.4 10.2-3.7 20.7-11.3 29.5-3 3.5-6.8 6.5-11.2 9-14 8.3-33.7 11.7-51.9 9.3-22.2-2.9-55.5-18.5-57.3-36-.2-1.7-.1-3.4.1-5.2 1.4-10 8.9-21.7 12.8-30.4 5.8-13.1 12.6-26 20.2-38.6 2.6-4.3 5.3-8.5 8.4-12.7 5.4-7.2 12-13.9 21-19 14.1-8 35.6-10.8 50.2-3.3 10.6 5.5 15.1 14.6 17.4 23.9.6 2.6 1.1 5.3 1.4 7.8 3.2 21.9 3.3 43.9.2 65.7z"
          ></path>
          <path
            id="Vector_10"
            fill="#ED373E"
            d="M187.6 387.5c-14 8.3-33.7 11.7-51.9 9.3-22.2-2.9-55.5-18.5-57.3-36-.2-1.7-.1-3.4.1-5.2 9.9-3.4 20.1-5.9 27.5-7.5 22.5-4.6 49.1-3 66 8.4 11.8 8 17 19.7 15.6 31z"
          ></path>
          <path
            id="Vector_11"
            fill="#fff"
            d="M208.5 275.7c-29.5-.5-59-1-88.6-1.6 4-5.4 8.7-10.4 14.6-14.8 2-1.5 4.2-2.9 6.5-4.2 14.1-8 35.6-10.8 50.2-3.3 5 2.6 8.6 5.9 11.3 9.8 3 4.3 4.8 9.2 6 14.1z"
          ></path>
          <path
            id="Vector_12"
            fill="#333"
            d="M380.4 116.4c-19.2-20.4-44.6-34.9-71.8-41.2-13.7-3.1-27.7-4.3-41.2-8-13.5-3.7-26.9-10.5-34.7-22.1-7.8-11.6-8.3-28.9 1.7-38.7 14.8 16.6 37.7 25.3 59.2 30.9 21.6 5.6 44.2 10.7 61.6 24.7 16.1 12.9 24.5 33.7 25.2 54.4z"
          ></path>
          <path
            id="Vector_13"
            fill="#E6E6E6"
            d="M200.6 261.6c-22.2-5.5-45.5-6.3-68-2.2 2-1.5 4.2-2.9 6.5-4.2 14.1-8 35.6-10.8 50.2-3.3 5 2.5 8.6 5.9 11.3 9.7z"
          ></path>
          <path
            id="Vector_14"
            fill="#333"
            d="M0 109.9C19.2 89.6 44.6 75 71.8 68.8c13.7-3.1 27.7-4.3 41.2-8 13.5-3.7 26.9-10.5 34.7-22.1C155.5 27.1 156 9.8 146 0c-14.8 16.6-37.7 25.3-59.2 30.9-21.6 5.6-44.2 10.7-61.6 24.7C9.1 68.5.7 89.3 0 109.9z"
          ></path>
          <path
            id="Vector_15"
            fill="#333"
            d="M147 399.9c-3.9 0-7.8-.2-11.6-.7-23.5-3.1-57.4-19.1-59.3-38-.2-1.8-.2-3.7.1-5.8 1.1-7.6 5.4-15.9 9.2-23.3 1.4-2.7 2.7-5.3 3.8-7.7 5.9-13.1 12.7-26.2 20.3-38.8 2.9-4.9 5.7-9.1 8.5-12.9 6.6-8.7 13.5-15 21.8-19.6 14-7.9 36.4-11.6 52.4-3.4 9.7 5 15.6 13 18.6 25.4.6 2.6 1.1 5.3 1.5 8.1 3.1 22 3.2 44.2.1 66.1-1.4 10.5-3.9 21.5-11.8 30.7-3.2 3.7-7.1 6.9-11.7 9.5-11.4 6.7-26.7 10.4-41.9 10.4zm24.2-150.1c-10.6 0-21.4 3-29.1 7.4-7.7 4.3-14.1 10.2-20.3 18.4-2.7 3.6-5.4 7.7-8.3 12.5-7.5 12.5-14.2 25.4-20 38.3-1.1 2.4-2.5 5.1-3.9 7.9-3.6 7-7.7 15-8.7 21.9-.3 1.7-.3 3.2-.1 4.6 1.7 16.2 34.4 31.2 55.3 33.9 17.7 2.3 37-1.1 50.4-9 4.2-2.4 7.7-5.3 10.6-8.5 6.7-7.8 9.2-16.9 10.7-28.2 3-21.4 2.9-43.2-.1-64.8-.3-2.6-.8-5.2-1.4-7.6-2.7-10.9-7.8-18.1-16.2-22.4-5.6-3.1-12.2-4.4-18.9-4.4z"
          ></path>
          <g id="Group_2">
            <path
              id="Vector_16"
              fill="#fff"
              d="M79.8 193.9h-7.6c-3.6 0-6.6-3-6.6-6.6 0-3.6 3-6.6 6.6-6.6h7.6c3.6 0 6.6 3 6.6 6.6 0 3.7-3 6.6-6.6 6.6z"
            ></path>
          </g>
          <g id="Group_3">
            <path
              id="Vector_17"
              fill="#fff"
              d="M245.899 191h-7.6c-3.6 0-6.6-3-6.6-6.6 0-3.6 3-6.6 6.6-6.6h7.6c3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6z"
            ></path>
          </g>
          <path
            id="Vector_18"
            fill="#fff"
            d="M183.3 382.1c-3.7-15-16.1-27.5-31-31.4-8.9-2.3-18.2-1.7-27.3-.6-13.8 1.6-27.5 4.2-40.9 7.9 17.9-2 35.4-3.5 53.2-.8 17.8 2.7 35.3 10.4 46 24.9z"
            opacity="0.23"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_735_12968">
          <path fill="#fff" d="M0 0H380.4V399.9H0z"></path>
        </clipPath>
      </defs>
    </svg>
    <div >
    <Link to='/' className="flex space-x-8 items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="17"
      fill="none"
      viewBox="0 0 27 17"
    >
      <g id="Group 1" stroke="#000" strokeLinejoin="round" strokeWidth="2.081">
        <path
          id="Line 1"
          d="M2.396 5.848h18.446A4.159 4.159 0 0125 10.007v1.526a4.159 4.159 0 01-4.16 4.159H6.408"
        ></path>
        <path id="Vector 2" d="M6.043 1.473L1.668 5.848l4.375 4.375"></path>
      </g>
    </svg>
    <h2 className='text-3xl'>Go Home</h2>
    </Link>
    </div>
    </div>
  );
}

export default PageNotFound;