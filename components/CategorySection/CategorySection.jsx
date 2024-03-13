import Heading from '../Heading/Heading';
import './CategorySection.scss';
import CategoryCard from '../CategoryCard/CategoryCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const imageGridCards = { 
  "info": [
        {
            "id": "762797",
            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                "text": "Burgers",
                "type": "WEBLINK",
                "count": 32,
                "price" : 120,

            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for burger",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
            "frequencyCapping": {}
        },
        {
            "id": "750592",
            "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                "text": "Biryani",
                "type": "WEBLINK",
                "count": 24,
                "price" : 300,
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for biryani",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
            "frequencyCapping": {}
        },
        {
            "id": "750580",
            "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                "text": "pizzas",
                "type": "WEBLINK",
                "count": 17,
                "price" : 100,
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for pizza",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
            "frequencyCapping": {}
        },
        {
            "id": "750588",
            "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                "text": "Chinese",
                "type": "WEBLINK",
                "count": 36,
                "price" : 250,
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for chinese",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
            "frequencyCapping": {}
        },
        {
            "id": "749874",
            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                "text": "Cakes",
                "type": "WEBLINK",
                "count": 45,
                "price" : 350,
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurant curated for cakes",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
            "frequencyCapping": {}
        },
        {
            "id": "750597",
            "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
            "action": {
                "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                "text": "Ice Cream",
                "type": "WEBLINK",
                "count": 67,
                "price" : 100,
            },
            "entityType": "BANNER",
            "accessibility": {
                "altText": "restaurants curated for icecream",
                "altTextCta": "open"
            },
            "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
            "frequencyCapping": {}
        },
    ],
}

const CategorySection = () => {
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
        <section className='category-wrapper'>
            <div className='container'>
                < Heading/>
                <Slider className='category-card-wrapper'  {...settings}>
                    {
                      imageGridCards.info.map((info)=> {
                        return <CategoryCard info={info} key={info.id} />
                      })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default CategorySection;