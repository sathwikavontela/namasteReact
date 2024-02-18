import { useState } from "react";
import MenuCard from "./MenuCard";
const RestaurantCategory = ({ data, isOpen, setShowIndex, showIndex }) => {
  // console.log(isOpen);
  const showlist = () => {
    setShowIndex();
  };
  return (
    <div className=" mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={showlist}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {isOpen && <MenuCard items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
