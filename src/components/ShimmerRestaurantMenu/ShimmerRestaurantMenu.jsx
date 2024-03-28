
import './ShimmerRestaurantMenu.scss';

const ShimmerRestaurantMenu = () => {
    return (
        <div className="shimmer-restaurant-menu-wrapper">
            <div className='container'>
                <div className='restaurant-name-section'>
                    <div className='restaurant-name-details'>
                        <p className='box'></p>
                        <p className='box'></p>
                        <p className='box box-big'></p>
                    </div>
                    <div className='box-rating-card'></div>
                </div>
                <div className='restaurant-time-section'>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>
                <div className='restaurant-menu-section'>
                    <h2 className='box'></h2>
                    <div className='menu-card'>
                        <div className='menu-card-details'>
                            <h3 className='box'></h3>
                            <p className='box'></p>
                            <p className='box box-big'></p>
                            <p className='box box-big'></p>
                        </div>
                        <div className='box-menu-card-img'></div>
                    </div>
                    <div className='menu-card'>
                        <div className='menu-card-details'>
                            <h3 className='box'></h3>
                            <p className='box'></p>
                            <p className='box box-big'></p>
                            <p className='box box-big'></p>
                        </div>
                        <div className='box-menu-card-img'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShimmerRestaurantMenu;