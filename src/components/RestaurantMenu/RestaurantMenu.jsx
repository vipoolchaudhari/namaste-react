import "./RestaurantMenu.scss";
import { MdOutlineStar, MdCurrencyRupee } from "react-icons/md";
import { BiCaretUpSquare } from "react-icons/bi";
import {
  restaurant_distance_icon,
  restaurant_menu_icon,
} from "../../utils/constants";
import { PiSquareLogoFill } from "react-icons/pi";

import { useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import designLeft from "../../assets/img/designLeft.svg";
import designRight from "../../assets/img/designRight.svg";

import ShimmerRestaurantMenu from "../ShimmerRestaurantMenu/ShimmerRestaurantMenu";
import useRestaurantMenuData from "../../utils/useRestaurantMenuData";

const RestaurantMenu = () => {
  const { restId } = useParams();
  console.log("useParams()", useParams());

  const restData = useRestaurantMenuData(restId);
  console.log("restData", restData);

  if (restData === null) {
    return <ShimmerRestaurantMenu />;
  }

  const {
    name,
    cuisines,
    feeDetails,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = restData?.cards[2]?.card?.card?.info;
  const { title, itemCards } =
    restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="restaurant-menu-wrapper">
      <div className="container">
        <div className="restaurant-name-section">
          <h2 className="restaurant-name">{name}</h2>
        </div>
        <div className="restaurant-details-section">
          <div className="restaurant-name-details">
            <div className="restaurant-name-box">
              <div className="rating-section">
                <div className="star">
                  <MdStars className="icon" /> {avgRatingString} (
                  {totalRatingsString})
                </div>
                <div className="dot">
                  <BsDot className="icon" />
                  {costForTwoMessage}
                </div>
              </div>
              <p className="cuisines">{cuisines.join(", ")}</p>
              <div className="address-box">
                <div className="address-design">
                  <span className="circle"></span>
                  <span className="line"></span>
                  <span className="circle"></span>
                </div>
                <div className="address-details">
                  <div className="row">
                    <span className="bold">Outlet</span> <span>{areaName}</span>
                  </div>
                  <div className="row">
                    <span className="bold">{sla.slaString}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="restaurant-distance-details">
              {sla?.lastMileTravelString && (
                <div className="note">
                  <img
                    src={restaurant_distance_icon + feeDetails?.icon}
                    alt="icon"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: feeDetails?.message }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="restaurant-menu-heading-section">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 16" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g fill="var(--fill-color)" stroke="var(--stroke-color)" stroke-width=".2" ><path d="M10.558 4c-.073 0-.119.002-.13.003-1.821 0-3.33.92-4.788 1.811-1.456.889-2.961 1.808-4.796 1.808a.252.252 0 0 0-.251.252c0 .14.112.253.251.253h6.29a.252.252 0 0 0 .25-.253.252.252 0 0 0-.25-.252H3.33c.91-.363 1.747-.874 2.57-1.376 1.464-.894 2.847-1.738 4.541-1.738.03-.002 1.683-.074 2.742.937.598.571.902 1.389.902 2.43.002.033.097 1.753-.882 2.8-.508.544-1.226.82-2.134.82-.021 0-1.156.034-1.864-.655-.388-.377-.583-.912-.58-1.59 0-.012 0-.753.554-1.31.432-.435 1.088-.655 1.95-.655h.052a.252.252 0 0 0 .002-.505c-1.03-.01-1.827.262-2.366.809a2.492 2.492 0 0 0-.694 1.665c-.004.816.243 1.475.736 1.952.865.839 2.167.795 2.22.793h.002c1.043 0 1.884-.33 2.49-.98 1.129-1.21 1.02-3.082 1.016-3.161 0-1.17-.357-2.112-1.061-2.783C12.48 4.08 11.004 4 10.558 4ZM23.163 7.748h-7.327a.248.248 0 0 0-.243.252c0 .14.109.252.243.252h7.328A.248.248 0 0 0 23.407 8a.248.248 0 0 0-.244-.252Z" /></g>
          </svg>
          <h4>Menu</h4>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 16" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g fill="var(--fill-color)" stroke="var(--stroke-color)" stroke-width=".2"><path d="M8.163 7.748H.836A.248.248 0 0 0 .593 8c0 .14.109.252.243.252h7.328A.248.248 0 0 0 8.407 8c0-.14-.11-.252-.244-.252ZM13.442 4c.073 0 .119.002.13.003 1.821 0 3.33.92 4.788 1.811 1.456.889 2.961 1.808 4.796 1.808a.252.252 0 0 1 0 .505h-6.29a.252.252 0 0 1 0-.505h3.803c-.91-.363-1.747-.874-2.57-1.376-1.464-.894-2.847-1.738-4.541-1.738-.03-.002-1.683-.074-2.742.937-.598.571-.902 1.389-.902 2.43-.001.033-.097 1.753.882 2.8.508.544 1.226.82 2.134.82.021 0 1.155.034 1.864-.655.388-.377.583-.912.58-1.59 0-.012 0-.753-.554-1.31-.432-.435-1.088-.655-1.95-.655h-.052a.252.252 0 0 1-.002-.505c1.03-.01 1.827.262 2.366.809.703.713.694 1.626.694 1.665.004.816-.243 1.475-.736 1.952-.865.839-2.167.795-2.22.793h-.002c-1.043 0-1.884-.33-2.49-.98-1.129-1.21-1.02-3.082-1.016-3.161 0-1.17.357-2.112 1.061-2.783C11.52 4.08 12.996 4 13.442 4Z"/></g>
          </svg>
        </div>
        <div className="restaurant-menu-section">
          <h2 className="heading">
            {title} <span>({itemCards.length})</span>
          </h2>
          {console.log("iteam card", itemCards)}
          {itemCards.map((item) => {
            return (
              <div key={item.card?.info?.id} className="menu-card">
                <div className="menu-card-details">
                  <div className="menu-card-icons">
                    {item.card?.info?.isVeg === 1 ? (
                      <span className="veg">
                        <PiSquareLogoFill />
                      </span>
                    ) : (
                      <span className="non-veg">
                        <BiCaretUpSquare />
                      </span>
                    )}
                    {item.card?.info?.ribbon?.text && (
                      <span className="best">
                        <MdOutlineStar className="icon" />{" "}
                        {item.card?.info?.ribbon?.text}
                      </span>
                    )}
                  </div>
                  <h3>{item.card?.info?.name}</h3>
                  <p className="rupees">
                    <MdCurrencyRupee className="icon" />
                    {item.card?.info?.defaultPrice / 100 ||
                      item.card?.info?.price / 100}{" "}
                    {item.card?.info?.offerTags &&
                    item.card?.info?.offerTags.length > 1 ? (
                      <span className="note">
                        <strong>{item.card?.info?.offerTags[0]?.title}</strong>{" "}
                        | {item.card?.info?.offerTags[0]?.subTitle}
                      </span>
                    ) : null}{" "}
                  </p>
                  <p className="description">{item.card?.info?.description}</p>
                </div>
                <div className="menu-card-img">
                  <img
                    src={restaurant_menu_icon + item.card?.info?.imageId}
                    alt=""
                  />
                  <button className="btn-counter">
                    <div className="text">Add</div>
                    <div className="counter hide">
                      <span className="minus">-</span>
                      <span className="count">1</span>
                      <span className="plus">+</span>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
