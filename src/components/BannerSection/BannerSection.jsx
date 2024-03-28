import SearchBox from '../SearchBox/SearchBox';
import './BannerSection.scss';

const BannerSection = ({onClickSerach}) => {
    return (
        <section className='header-banner'>
            <div className='container'>
                <div className='header-banner-content'>
                    <p>Best food in town.</p>
                    <h2>Delivery Food from the Best Restaurants.</h2>
                    <SearchBox onClickSerach={onClickSerach}/>
                </div>
            </div>
        </section>
    )
}

export default BannerSection;