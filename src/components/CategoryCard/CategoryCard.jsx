import './CategoryCard.scss'
import {category_img} from '../../utils/constants';


const CategoryCard = ({info,onClickCategory}) => {
    const {count,text,price} = info?.action;
    const {altText} = info?.accessibility;
    return (
        <div className='category-card' onClick={()=> {onClickCategory(text)}}>
            <div className='icon-wrapper'>
                <div className='category-number'>{count}</div>
                <img src={category_img + info.imageId}  alt={altText} />
            </div>
            <h4 className='name'>{text}</h4>
            <p className='price'>From Rs {price}</p>
        </div>
    )
}

export default CategoryCard;
