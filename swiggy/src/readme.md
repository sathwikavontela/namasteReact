const Body = () => {
let [resList, setresList] = useState([]);
let [filteredRestaurants, setFilteredRestaurants] = useState();
let [textValue, setTextValue] = useState([]);

if (resList.length === 0) {
return <ShimmerUI />;
}
useEffect(() => {
fun();
}, []);

const fun = async () => {
const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2987502&lng=78.44974309999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json1 = await data.json();
console.log(json1);
setresList(
json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
);
setFilteredRestaurants(
json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
);
};

return (
<div className="body">
<div className="buttons">
<button
className="filterButton"
onClick={() => {
let filteredResList = resList.filter(
(res) => res.info.avgRating > 4
);
console.log(filteredResList);
setFilteredRestaurants(filteredResList);
}} >
Top rated restaurants
</button>

        <div className="search-btn">
          <input
            type="text"
            className="text-field"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              let filteredResCards = resList.filter((res) =>
                res.info.cuisines.includes(textValue)
              );
              setFilteredRestaurants(filteredResCards);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="resCard-container">
        {filteredRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>

);
};
