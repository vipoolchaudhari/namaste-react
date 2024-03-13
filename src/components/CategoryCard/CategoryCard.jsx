import './CategoryCard.scss'
import {img_url} from '../../utils/contants';


const CategoryCard = ({info}) => {
    const {count,text,price} = info?.action;
    const {altText} = info?.accessibility;
    return (
        <div className='category-card'>
            <div className='icon-wrapper'>
                <div className='category-number'>{count}</div>
                <img src={img_url + info.imageId}  alt={altText} />
            </div>
            <h4 className='name'>{text}</h4>
            <p className='price'>From Rs {price}</p>
        </div>
    )
}

export default CategoryCard;
