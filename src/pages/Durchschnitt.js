import React from "react";
import "../Durchschnitt.css";
import cat from "../Images/1.png";
import tiger from "../Images/1.png";
import dear from "../Images/1.png";
import giraffe from "../Images/1.png";
import moose from "../Images/1.png";
import lion from "../Images/1.png";
import dog from "../Images/1.png";

function Durchschnitt() {
  return (
    <div>
      <h2>
        Hoppala! Das geht wohl leider nicht. Versuchen Sie es mit der eigenen
        Summe!
      </h2>

      <h3>
        Gerne können Sie, falls Sie zufälligerweise zu viel Zeit haben, diese
        unnötige Gallerie durchschauen!
      </h3>

      <div className="gallery">
        <img src={cat} alt="cat" />
        <img src={tiger} alt="tiger" />
        <img src={dear} alt="dear" />
        <img src={giraffe} alt="giraffe" />
        <img src={moose} alt="moose" />
        <img src={lion} alt="lion" />
        <img src={dog} alt="dog" />
      </div>

    </div>
  );
}

export default Durchschnitt;
