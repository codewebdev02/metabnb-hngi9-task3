import { playToStay } from "../../../components/data";
import "./style.scss";
import { useState } from "react";
import Card from "../../../components/Card";

const PlaceToStayA = () => {
  const [data, setData] = useState(playToStay);
  const [active, setActive] = useState("active1");
  const [rest, setRest] = useState(false);
  const filterResult = (catItem) => {
    const result = playToStay.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  const restaurant = playToStay.filter(
    (playToStay) => playToStay.category === "restaurant"
  );

  return (
    <div className="PlaceToStayA">
      <div className="container inPlaceToStayA">
        <div className="topBar">
          <div className="left">
            <button className={`button ${active === "active1" ? "activeButton" : ""}`}
              onClick={() => { filterResult("restaurant"); setActive("active1");}}>
              Restaurant
            </button>
            <button className={`button ${active === "active2" ? "activeButton" : ""}`}
              onClick={() => { filterResult("cottage"); setActive("active2"); setRest(true);}}>
              Cottage
            </button>
            <button className={`button ${active === "active3" ? "activeButton" : ""}`}
              onClick={() => { filterResult("castle"); setActive("active3"); setRest(true);}}>
              Castle
            </button>
            <button className={`button ${active === "active4" ? "activeButton" : ""}`}
              onClick={() => { filterResult("fantasticCity"); setActive("active4"); setRest(true);}}>
              Fantast&nbsp;city
            </button>
            <button className={`button ${active === "active5" ? "activeButton" : ""}`}
              onClick={() => { filterResult("beach"); setActive("active5"); setRest(true);}}>
              Beach
            </button>
            <button className={`button ${active === "active6" ? "activeButton" : ""}`}
              onClick={() => { filterResult("carbins"); setActive("active6"); setRest(true);}}>
              Carbins
            </button>
            <button className={`button ${active === "active7" ? "activeButton" : ""}`}
              onClick={() => { filterResult("offgrid"); setActive("active7"); setRest(true);}}>
              Off-grid
            </button>
            <button className={`button ${active === "active8" ? "activeButton" : ""}`}
              onClick={() => { filterResult("farm"); setActive("active8"); setRest(true);}}>
              Farm
            </button>
          </div>
          <div className="right">
            <div className="filter">
              <div className="inFilter">
                <span>Location</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9999 5L10.9999 5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99985 5H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9999 12H16.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9999 12H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9999 19H10.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99985 19H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9999 21V17" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9999 7V3" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.0001 14V10" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>


        <div className="inPlaceToStayAContent dGrid">
          <div className="InPlMhm">
            {rest ? (
              <>
                {data.map((item, i) => {
                  return <Card key={i} item={item} />;
                })}
              </>
            ) : (
              <>
                {restaurant.map((item, i) => {
                  return <Card key={i} item={item} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceToStayA;
