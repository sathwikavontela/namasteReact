import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [textValue, setTextValue] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  let [resList, setResList] = useState([]);

  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    const data = await fetch(RES_API);
    const json1 = await data.json();
    // console.log(json1);
    setResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>oops! look like you dont have an active internet connection</h1>;

  if (resList.length === 0) return <ShimmerUI />;

  return (
    <div className="w-[80%] m-auto">
      <div className="flex content-center">
        <button
          className="bg-gray-200 rounded-lg border px-3 pb-1 content-center m-6"
          onClick={() => {
            let filteredResCards = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredResCards);
          }}
        >
          Top rated restaurants
        </button>

        <div className="mx-1">
          <input
            type="text"
            className=" border rounded-lg  px-3 pb-1"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-200 rounded-lg border px-3 pb-1 content-center m-6"
            onClick={() => {
              let filteredCards = resList.filter((res) =>
                res.info.cuisines.includes(textValue)
              );
              setFilteredResList(filteredCards);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            <ResCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
