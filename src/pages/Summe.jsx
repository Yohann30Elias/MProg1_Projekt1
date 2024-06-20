import React, { useState } from "react";
import "../Summe.css";

function Summe() {
  const [inputSumme, setInputSumme] = useState();
  const [inputWert, setInputWert] = useState();
  const [inputSchaden, setInputSchaden] = useState();

  const calculateInsurance = () => {
    const insurance = (inputSumme / inputWert) * inputSchaden;
    return insurance.toFixed(2);
  };

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      if (inputSumme < inputWert) {
        alert("Achtung! Sie sind unterversichert.");
      } else if (inputSumme > inputWert) {
        alert("Achtung! Sie sind überversichert.");
      }
    }
  };

  return (
    <div className="Summe">
      <h1>Versicherungübernahme</h1>
      <div className="Inputs">
        <label htmlFor="inputSumme">Versichert für: </label>
        <input
          type="number"
          min={0}
          id="inputSumme"
          value={inputSumme}
          onChange={(e) => setInputSumme(parseFloat(e.target.value))}
          onKeyDown={pressEnter}
        />
      </div>

      <div className="Inputs">
        <label htmlFor="inputWert">Wert der Sache: </label>
        <input
          type="number"
          min={0}
          id="inputWert"
          value={inputWert}
          onChange={(e) => setInputWert(parseFloat(e.target.value))}
          onKeyDown={pressEnter}
        />
      </div>

      <div className="Inputs">
        <label htmlFor="inputSchaden">Schadenssumme: </label>
        <input
          type="number"
          min={0}
          id="inputSchaden"
          value={inputSchaden}
          onChange={(e) => setInputSchaden(parseFloat(e.target.value))}
          onKeyDown={pressEnter}
        />
      </div>
      <p>Die Versicherung übernimmt {calculateInsurance()} CHF des Schadens.</p>
    </div>
  );
}

export default Summe;
