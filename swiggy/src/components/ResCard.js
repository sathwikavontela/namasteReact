import React from "react";
import { CDN_URL } from "../utils/constants";
const ResCard = ({ resData }) => {
  return (
    <div className="  w-[15rem] h-80 overflow-y-hidden m-6 p-6 rounded-xl ">
      <div>
        <img
          className="w-60 h-[10rem] rounded-xl items-center "
          alt="res-card"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
      </div>
      <div className="mx-2 leading-5">
        <h3 className="font-bold py-2">{resData.info.name}</h3>
        <div className="flex">
          <h4>{resData.info.sla.deliveryTime}</h4>
          <h4>{"⭐" + resData.info.avgRating}</h4>
        </div>
        <h4 className="lighter mb-2">{resData.info.cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default ResCard;
