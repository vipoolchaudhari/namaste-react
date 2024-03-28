import { useEffect, useState } from "react";
import {restaurant_menu_data} from './constants.js'

const useRestaurantMenuData = (restId) => {
    const [restData,  setRestData] = useState(null);

    useEffect(()=> {
        fetchRestaurantMenu();
    }, [])

    fetchRestaurantMenu = async () => {
        const data = await fetch(restaurant_menu_data + restId);
        const json = await data.json();
        setRestData(json?.data);
    }

    return restData;
}

export default useRestaurantMenuData;