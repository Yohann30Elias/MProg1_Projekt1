import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Erste() {
  return (
    <div className="double_button">
      <Link to="/summe">
        <button className="erste_button">Schadensübernahme - Summe</button>
      </Link>
      <Link to="/durchschnitt">
        <button className="erste_button">Schadensübernahme - Quadratmeter</button>
      </Link>
      <Link to="/quadm">
      <button className="erste_button">Haftpflichtversicherung</button>
      </Link>
    </div>
  );
}

export default Erste;
