import "./Selecteurs.css";
import { useState } from "react";

const ad1 =
  "https://media.istockphoto.com/id/611308904/photo/cute-sitting-havanese-puppy-dog.jpg?s=612x612&w=0&k=20&c=OUmBXgww0CGOStMzapqVpxOwbla-sZDaS2DpKCjTQrk=";
const ad2 = "https://i.ytimg.com/vi/sKMoS8MhKxk/maxresdefault.jpg";
const ad3 =
  "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D";

const Selecteurs = () => {
  const [select, setSelect] = useState(null);
  const [select2, setSelect2] = useState(null);
  const [select3, setSelect3] = useState(0);

  const displayText = (num) => {
    if (num === null) {
      return "Trouvez le petit Lion";
    } else if (num === 1) {
      return "gagné";
    } else {
      return "perdu";
    }
  };

  const urlsadd = [
    "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg",
    "https://www.treehugger.com/thmb/Uiz8oJ2iMXPbsLYQHfi7Z89rpHE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2015__04__puppies-active-34bec4a7c83341b78aeec4f9c52eb9c8.jpg",
    "https://www.dailypaws.com/thmb/_V065sM9hRjVbxWhnWKoSqTLW3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aussi-puppy-sakura-park-2000-a5ac8d762bea406f84beb4d9ec745d15.jpg",
  ];

  return (
    <div
      className="seleceursContainer"
      onClick={() => {
        setSelect(null);
        setSelect2(null);
      }}
    >
      <div className="selectorContainer">
        {/* <span> SELECTEURS 1 </span> */}
        <span> Faites votre choix</span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelect(0);
          }}
          className={select === 0 ? "selected1" : "selector1"}
        ></div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setSelect(1);
          }}
          className={select === 1 ? "selected1" : "selector1"}
        ></div>
        <div
          onClick={(e) => {
            setSelect(2);
            e.stopPropagation();
          }}
          className={select === 2 ? "selected1" : "selector1"}
        ></div>
      </div>
      <div>
        {/* <span> SELECTEURS 2</span> */}
        <div className="selectorContainer">
          <span>{displayText(select2)}</span>
          {select2 === 0 ? (
            <img
              src={ad1}
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(null);
              }}
              // onMouseLeave={(e) => {
              //   setSelect2(null);
              // }}
              className="imgselector"
            ></img>
          ) : (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(0);
              }}
              className="selector2"
            ></div>
          )}
          {select2 === 1 ? (
            <img
              src={ad2}
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(null);
              }}
              className="imgselector"
              // onMouseLeave={(e) => {
              //   setSelect2(null);
              // }}
            ></img>
          ) : (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(1);
              }}
              className="selector2"
            ></div>
          )}
          {select2 === 2 ? (
            <img
              src={ad3}
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(null);
              }}
              // onMouseLeave={(e) => {
              //   setSelect2(null);
              // }}
              className="imgselector"
            ></img>
          ) : (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setSelect2(2);
              }}
              className="selector2"
            ></div>
          )}
        </div>
      </div>
      <div className="selectorContainer">
        <div>Next !</div>
        <img className="sel3img" src={urlsadd[select3]} />
        <button
          onClick={() => {
            const newPos = (select3 + 1) % 3;
            setSelect3(newPos);
          }}
        >
          {">"}
        </button>
      </div>
      <div className="selectorContainer">
        <div style={{ backgroundColor: "pink" }}>
          <a href="https://fastgood.cheap/">Fast Good Cheap</a>
        </div>
      </div>
    </div>
  );
};

export default Selecteurs;
