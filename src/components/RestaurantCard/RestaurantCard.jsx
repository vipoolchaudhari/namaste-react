import './RestaurantCard.scss';
import { restaurant_img } from '../../utils/constants';
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineAvTimer } from "react-icons/md";

const RestaurantCard = ({data}) => {
    const {name, cloudinaryImageId, avgRatingString, cuisines, sla, aggregatedDiscountInfoV3} = data?.info;
    return (
        <div className='restaurant-card'>
            <div className='img-wrapper'>
                <img src={restaurant_img + cloudinaryImageId} alt={name} />
                {aggregatedDiscountInfoV3?.header || aggregatedDiscountInfoV3?.subHeader ? <span className='offer-title'>{aggregatedDiscountInfoV3?.header || '' } {aggregatedDiscountInfoV3?.subHeader || '' }</span> : ''}
                <span className='stars'><MdOutlineStar className='icon'/>{avgRatingString}</span>
            </div>
            <div className='details'>
                <h3 className='name'>{name}</h3>
                <p className='times'><MdOutlineAvTimer className='icon'/>{sla?.slaString}</p>
                <p className='keys'>{cuisines.join(', ')}</p>
                <p className='address'>Thane Panchpakhadi</p>
            </div>
        </div>
    )
}

export default RestaurantCard;