import React from "react";
import { beach, carbins, castle, cottage, fantasticCity, farm, offGrid, restaurant } from "../../../components/data";
import { StarRatingComponent } from "../../../components/StarRating/starRating";

export default function Restaurant() {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {restaurant.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
}

export const Cottage = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {cottage.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const Castle = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {castle.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const FantasticCity = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {fantasticCity.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const Beach = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {beach.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const Carbins = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {carbins.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const OffGrid = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {offGrid.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};

export const Farm = () => {
  return (
    <div className="inPlaceToStayAContent dGrid">
      <div className="InPlMhm">
        {farm.map((item, i) => {
          return (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={item.img} alt="" />
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
        })}
      </div>
    </div>
  );
};
