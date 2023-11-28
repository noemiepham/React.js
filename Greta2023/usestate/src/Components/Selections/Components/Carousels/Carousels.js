import "../Carousels/Carousels.css";
import lion from "../../../../images/lion.png";
import fox from "../../../../images/fox.png";
import rabbit from "../../../../images/rabbit.png";
import panda from "../../../../images/panda.png";
import bear from "../../../../images/bear.png";
import { useState } from "react";

const arrayImage = [lion, fox, rabbit, panda, bear];

export default function Carousels() {
  const [index, setIndexNext] = useState(0);
  function handlClick() {
    setIndexNext(index + 1);
    if (index === arrayImage.length - 1) {
      console.log(arrayImage.length);
      console.log(index + 1);
      setIndexNext(0);
    }
  }

  return (
    <div className="selecteursContainer">
      <span>Next</span>
      <img
        src={arrayImage[index]}
        alt={arrayImage[index]}
        className="sel3img"
        key={arrayImage[index]}
      />

      {/*     {arrayImage.map((image, index) => (
        <img src={image} alt={image} className="sel3img" key={index} />
      ))} */}

      <button onClick={handlClick}> 🔜 </button>
    </div>
  );
}
