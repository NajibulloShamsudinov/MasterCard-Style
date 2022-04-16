import React from "react";
import vektor1 from "../../imgs/Vector (1).png";
import vektor2 from "../../imgs/Vector (2).png";
import vektor3 from "../../imgs/Vector (3).png";
import vektor4 from "../../imgs/Group.png";
import vektor5 from "../../imgs/vektor5.png";
import vektor6 from "../../imgs/vektor6.png";
import vektor7 from "../../imgs/vektor7.png";
import vektor8 from "../../imgs/Vector 8.png";

const logos = [
  vektor1,
  vektor2,
  vektor3,
  vektor4,
  vektor5,
  vektor6,
  vektor7,
  vektor8,
];

function CardShow() {
  return (
    <>
      <div className="text_partners">Show more partners</div>
      <div className="vektorsGroup1">
        {logos.map((elem, index) => {
          <img src={elem} alt="logos" />;

          console.log(elem);
        })}
      </div>
    </>
  );
}

export default CardShow;
