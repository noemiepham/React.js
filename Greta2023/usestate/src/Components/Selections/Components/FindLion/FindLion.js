import { useState } from "react";
import lion from "../../../../images/lion.png";
import fox from "../../../../images/fox.png";
import rabbit from "../../../../images/rabbit.png";

export default function FindLion() {
  const [imageUrl, setImageUrl] = useState(true);
  const [imageUrl1, setImageUrl1] = useState(true);
  const [imageUrl2, setImageUrl2] = useState(true);

  function handleText(num) {
    if (num === false) {
      return "Perdu";
    } else {
      return "Gargné";
    }
  }

  return (
    <div className="selecteursContainer">
      <span>{handleText(imageUrl1)}</span>

      {imageUrl ? (
        <div
          className="hiddenImage"
          onClick={() => {
            setImageUrl(false);
            setImageUrl1(true);
            setImageUrl2(true);
          }}
        ></div>
      ) : (
        <img className="imgSelector" src={lion} alt="lion" />
      )}

      {imageUrl1 ? (
        <div
          className="hiddenImage"
          onClick={() => {
            setImageUrl(true);
            setImageUrl1(false);
            setImageUrl2(true);
          }}
        ></div>
      ) : (
        <img className="imgSelector" src={fox} alt="lion" />
      )}

      {imageUrl2 ? (
        <div
          className="hiddenImage"
          onClick={() => {
            setImageUrl(true);
            setImageUrl1(true);
            setImageUrl2(false);
          }}
        ></div>
      ) : (
        <img className="imgSelector" src={rabbit} alt="lion" />
      )}
    </div>
  );
}
