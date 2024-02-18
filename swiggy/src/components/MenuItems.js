import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useMenuItems from "../utils/useMenuItems";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const MenuItems = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const itemList = useMenuItems(resId);

  if (itemList === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
  } = itemList?.cards[0]?.card?.card?.info;

  const categories =
    itemList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (ele) =>
        ele.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleVegItems = () => {
    const filteredMenu = categories.map((ele) =>
      ele?.card?.card?.itemCards.filter((item) => item?.card?.info?.isVeg)
    );
  };

  console.log(itemList?.cards[0]?.card?.card?.info);
  //console.log(categories);

  return (
    <div className="bg-gray-50">
      <div className="w-6/12 m-auto">
        <div className="flex justify-between items-center">
          <div className="m-4">
            <h3 className=" font-bold text-xl">{name}</h3>
            <p className=" mr-12 my-1 text-xs">{cuisines.join(",")}</p>
            <p className=" mr-11 my-1 text-xs">{areaName}</p>
          </div>
          <div className="border p-2 items-center rounded-lg my-5">
            <h3 className="text-sm font-bold text-green-600">⭐ {avgRating}</h3>
            <hr />
            <p className="text-xs mt-2">{totalRatingsString}</p>
          </div>
        </div>
        <hr />

        <div>
          <div>
            <h2 className="mx-4 my-2 font-bold text-lg">{costForTwoMessage}</h2>
          </div>
          <hr />
        </div>
        <div className="m-5">
          <button
            className="border bg-green-400 rounded-lg p-2 h-10 text-base"
            onClick={handleVegItems}
          >
            veg only
          </button>
        </div>

        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.info?.id}
            data={category?.card?.card}
            isOpen={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
            showIndex={showIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
