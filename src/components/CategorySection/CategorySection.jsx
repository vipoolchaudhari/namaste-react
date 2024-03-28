import Heading from '../Heading/Heading';
import './CategorySection.scss';
import CategoryCard from '../CategoryCard/CategoryCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../utils/mockData'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      />
    );
  }
  
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}



const CategorySection = ({onClickCategory}) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                nextArrow: <NextArrow className="arrow next-arrow"/>,
                prevArrow: <PrevArrow className="arrow pre-arrow"/>,
                slidesToShow: 2,
              }
            }
          ]
      };

    return (
        <section className='section category-wrapper'>
            <div className='container'>
                < Heading type="Categories" name="Popular Categories"/>
                <Slider className='category-card-wrapper'  {...settings}>
                    {
                      data.imageGridCards.info.map((info)=> {
                        return <CategoryCard info={info} key={info.id} onClickCategory={onClickCategory} />
                      })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default CategorySection;