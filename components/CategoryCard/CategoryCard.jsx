import './CategoryCard.scss'


const CategoryCard = ({info}) => {
    const {count,text,price} = info?.action;
    const {altText} = info?.accessibility;
    return (
        <div className='category-card'>
            <div className='icon-wrapper'>
                <div className='category-number'>{count}</div>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + info.imageId}  alt={altText} />
            </div>
            <h4 className='name'>{text}</h4>
            <p className='price'>From Rs {price}</p>
        </div>
    )
}

export default CategoryCard;
