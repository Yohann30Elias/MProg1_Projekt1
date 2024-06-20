import React from "react";
import "../Kontakt.css";

function Kontakt() {
    
  return (
    <div className="container">
      <form action="">
        <label htmlFor="firstname">Vorname & Nachname</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Ihr Vor- und Nachname..."
        />

        <label htmlFor="lastname">E-Mail</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Ihre E-Mail..."
        />

        <label htmlFor="Grund">Grund</label>
        <select id="grund" name="grund">
          <option value="reklammation">Reklammation</option>
          <option value="verbesserungsvorschlag">Verbesserunsvorschlag</option>
          <option value="feedback">Feedback</option>
        </select>

        <label htmlFor="subjekt">Subjekt</label>
        <textarea
          id="subjekt"
          name="subjekt"
          placeholder="Schreiben Sie eine Nachricht"
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Kontakt;
