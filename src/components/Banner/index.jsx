import img1 from "../../assets/banner/image1.png";
import img2 from "../../assets/banner/image2.png";
import img3 from "../../assets/banner/image3.png";
import img4 from "../../assets/banner/image4.png";
import "./styles.scss";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="container inBanner">
        <div className="left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="searchBox">
            <input type="search" placeholder="Search for location" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
