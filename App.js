import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './assets/scss/index.scss';
import BannerSection from './components/BannerSection/BannerSection';
import HeaderBox from './components/HeaderBox/HeaderBox';
import CategorySection from './components/CategorySection/CategorySection';


/*
App
 - HeaderBanner 
    - HeaderBox
        - Logo
        - Menu
        - SearchBox
 - Body
    - RestaurantCategory
        - CategoryCard
    - Restaurant List
        - RestaurantCard
 - Footer
    - links
    - Address
    - copyrights
    - contact
*/

const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderBox/>
            <BannerSection/>
            <CategorySection/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);