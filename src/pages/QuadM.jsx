import React, { useState } from "react";
import "../QuadM.css";

function Summe() {
  const [inputRisiko, setInputRisiko] = useState();
  const [inputDeckung, setInputDeckung] = useState();
  const [inputDauer, setInputDauer] = useState();

  const calculateInsurance = () => {
    const risikoFaktor = {
      lower_risk: 0.5,
      low_risk: 1.0,
      medium_risk: 1.5,
      high_risk: 2.0,
      higher_risk: 2.5,
      highest_risk: 3.0,
    }[inputRisiko] || 0;
  
    return (inputDeckung * risikoFaktor * inputDauer / 100).toFixed(2);
  };

  const handleInputRisikoChange = (event) => {
    setInputRisiko(event.target.value);
  };

  return (
    <div className="Summe">
      <h1>Haftpflichtversicherungs Prämienberrechnung</h1>
      <div className="Inputs">
        <label htmlFor="inputRisiko">Risikofaktor: </label>
        <select id="inputRisiko" name="Risikofaktor" value={inputRisiko} onChange={handleInputRisikoChange}>
          <option value="lower_risk">0.5</option>
          <option value="low_risk">1.0</option>
          <option value="medium_risk">1.5</option>
          <option value="high_risk">2.0</option>
          <option value="higher_risk">2.5</option>
          <option value="highest_risk">3.0</option>
        </select>
      </div>

      <div className="Inputs">
        <label htmlFor="inputDeckung">Deckungssumme:</label>
        <input
          type="number"
          min={0}
          id="inputDeckung"
          value={inputDeckung}
          onChange={(e) => setInputDeckung(parseFloat(e.target.value))}
        />
      </div>
        <br></br>
      <div className="Inputs">
        <label htmlFor="inputDauer">Versicherungsdauer in Jahre:</label>
        <input
          type="number"
          min={0}
          id="inputDauer"
          value={inputDauer}
          onChange={(e) => setInputDauer(parseFloat(e.target.value))}
        />
      </div>
      <p>Die Prämie für Ihre Haftpflichtversicherung beträgt {calculateInsurance()} CHF.</p>
    </div>
  );
}

export default Summe;
