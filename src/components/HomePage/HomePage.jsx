import './HomePage.scss';
import { useState } from 'react';
import BannerSection from '../BannerSection/BannerSection';
import CategorySection from '../CategorySection/CategorySection';
import RestaurantSection from '../RestaurantSection/RestaurantSection';


const HomePage = () => {
    const [categoryName,setCategoryName] = useState('');
    const [searchInputValue , setSearchInputValue] = useState('');


    const onClickCategory = (text) => {
        setCategoryName(text);
        setSearchInputValue('');
        console.log('onClickCategory',text);
    }

    const onClickSerach = (inputValue) => {
        setSearchInputValue(inputValue);
        setCategoryName('');
        console.log('inputValue',inputValue);
    }

    return (
        <>
            <BannerSection onClickSerach={onClickSerach} />
            <CategorySection onClickCategory = {onClickCategory}/>
            <RestaurantSection categoryName={categoryName} searchInputValue={searchInputValue}/>
        </>
    )
}

export default HomePage;