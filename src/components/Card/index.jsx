import React from "react";
import { StarRatingComponent } from "../StarRating/starRating";

const Card = ({ item }) => {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={item.img} alt="" />
        <div className="wishlist">
          <img src={item.wishlist} alt="" />
        </div>
      </div>
      <div className="boxInfo">
        <div className="bInfo">
          <span>{item.title}</span>
          <span className="bInfoFl">{item.duration}</span>
        </div>
        <div className="bInfo">
          <span>{item.distance}</span>
          <span>{item.availability}</span>
        </div>
        <div className="starRating">
          <StarRatingComponent />
        </div>
      </div>
    </div>
  );
};

export default Card;
