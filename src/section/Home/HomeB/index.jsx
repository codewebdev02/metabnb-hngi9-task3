import { inspiration } from "../../../components/data";
import { StarRatingComponent } from "../../../components/StarRating/starRating";
import "./styles.scss";

const HomeB = () => {
  return (
    <div className="HomeB">
      <div className="container inHomeB">
        <h2>Inspiration for your next adventure</h2>

        <div className="inHomeBContent dGrid">
          <div className="InPlMhm">
            {inspiration.map((item, i) => {
              return (
                <div className="box" key={i}>
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeB;
