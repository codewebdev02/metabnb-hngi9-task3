import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.scss";

function StarRating({count, value, 
  inactiveColor='#ddd',
  size=24,
  activeColor='#A02279', onChange}) {

// short trick 
const stars = Array.from({length: count}, () => <FaStar className="star" />)

// Internal handle change function
const handleChange = (value) => {
  onChange(value + 1);
}

return (
  <div>
    {stars.map((s, index) => {
      let style = inactiveColor;
      if (index < value) {
        style=activeColor;
      }
      return (
        <span className={"star"}  
          key={index}
          style={{color: style}}
          onClick={()=>handleChange(index)}>{s}</span>
      )
    })}
    {/* {value} */}
  </div>
)
}


export function StarRatingComponent() {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [rating, setRating] = useState(5);

  const handleChange = (value) => {
    setRating(value);
  };
  return (
    <div>
      <StarRating
        count={5}
        size={40}
        value={rating}
        activeColor={"#A02279"}
        inactiveColor={"#aaaaaa"}
        onChange={handleChange}
      />
    </div>
  );
}
