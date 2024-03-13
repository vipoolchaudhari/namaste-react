import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '../assets/scss/index.scss';
import BannerSection from './BannerSection/BannerSection';
import HeaderBox from './HeaderBox/HeaderBox';
import CategorySection from './CategorySection/CategorySection';

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