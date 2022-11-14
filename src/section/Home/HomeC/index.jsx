import { Link } from "react-router-dom";
// import metabnbImg from "../../../assets/groupimg.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import "./styles.scss";

const HomeC = () => {
  return (
    <div className="HomeC">
      <div className="container inHomeC">
        <div className="left">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Link to="">Learn more</Link>
        </div>
        <div className="right">
          {/* <img src={metabnbImg} alt="" /> */}
          <div className="inRight">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeC;
