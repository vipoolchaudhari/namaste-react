import "./RestaurantSection.scss";
import Heading from "../Heading/Heading";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import ShimmerRestaurantCard from "../ShimmerRestaurantCard/ShimmerRestaurantCard";
import ErrorCardSection from '../ErrorCardSection/ErrorCardSection';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RestaurantSection = ({ categoryName, searchInputValue }) => {
  
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  console.log('filterRestaurantList', filterRestaurantList);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  useEffect(() => {
    if (categoryName) {

      if(categoryName === 'All'){
        setFilterRestaurantList(restaurantList);
      } else{
        console.log('restaurantList categoryName', restaurantList);
        const filterList = restaurantList.filter((data) => {
          return (
            data.info.cuisines.findIndex((cuisines) => {
              return cuisines.toLowerCase() === categoryName.toLowerCase();
            }) > -1
          );
        });
        setFilterRestaurantList(filterList);
      }
    }
    if (searchInputValue) {
        console.log('restaurantList searchInputValue', restaurantList);
      const filterList = restaurantList.filter((data) => {
        return data.info.name
          .toLowerCase()
          .includes(searchInputValue.toLowerCase());
      });
      setFilterRestaurantList(filterList);
    }
  }, [categoryName, searchInputValue]);

  return (
    <section className="section restaurant-wrapper">
      <div className="container">
        <Heading type="Restaurants" name="Restaurants" />
        {console.log('filterRestaurantList', filterRestaurantList)}
        <div className="restaurant-card-wrapper">
          {
            restaurantList.length === 0 ? 
                <ShimmerRestaurantCard />
            : 
            
                
                    (filterRestaurantList.length > 0) ? 
                        (filterRestaurantList.map((data) => {
                            return (
                              <Link className="restaurant-card-link" key={data.info.id} to={"restaurant/" + data.info.id}> <RestaurantCard data={data} /></Link>
                             )
                        }) 
                    )
                    :   <ErrorCardSection />
                
          }
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
