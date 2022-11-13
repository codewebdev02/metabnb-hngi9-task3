import img1 from "../../../assets/svg1.svg";
import img2 from "../../../assets/svg2.svg";
import img3 from "../../../assets/svg3.svg";
import "./styles.scss";

const data = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
];

const HomeA = () => {
  return (
    <div className="HomeA">
      <div className="container inHomeA">
        {data.map((item, i) => (
          <img src={item.img} alt="" key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeA;
