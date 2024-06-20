import React from "react";
import "../UeberUns.css";

function About() {
  return (
    <div>
      <div className="AboutStructure">
        <h1>Hilfe</h1>
        <h2>FAQ</h2>

        <h3>Was ist eine Haftpflichtversicherung?</h3>
        <p>
          Die Haftpflichtversicherung ist eine Art von Versicherung, die eine
          Person oder ein Unternehmen gegen Haftungsansprüche absichert. Im
          Falle eines Schadens, den die versicherte Person oder das versicherte
          Unternehmen verursacht hat, übernimmt die Versicherung die Kosten für
          den Schaden, soweit er vom Versicherungsumfang gedeckt ist.
        </p>
        <h3>Welche Risikostufe wähle ich aus?</h3>
        <p>
          Wählen Sie die Stufe, die Sie am besten beschreibt. Beachte, dass
          diese nur grobe beschreibungen sind und der Sinn dahinter beachtet
          werden sollte. Die Stufen schreiten mit dem Allgemeinen Risiko fort.
        </p>
        <br />
        <p>
          Risikofaktor 0,5: Eine Person mit einem eher ruhigen Lebensstil, die
          keine risikoreichen Aktivitäten ausübt, wie zum Beispiel
          Extremsportarten oder den Besitz von Haustieren.
        </p>
        <br />
        <p>
          Risikofaktor 1,0: Eine Person, die regelmäßig Sport treibt, aber keine
          Risikosportarten ausübt, wie zum Beispiel Schwimmen oder Joggen.
        </p>
        <br />
        <p>
          Risikofaktor 1,5: Eine Person, die regelmäßig Risikosportarten ausübt,
          wie zum Beispiel Klettern oder Skifahren.
        </p>
        <br />
        <p>
          Risikofaktor 2,0: Eine Person, die ein Motorrad oder ein Auto besitzt
          und häufig damit fährt.
        </p>
        <br />
        <p>
          Risikofaktor 2,5: Eine Person, die häufig Veranstaltungen besucht und
          Alkohol trinkt.
        </p>
        <br />
        <p>
          Risikofaktor 3.9: Eine Person, gelegentlich legale Drogen konsumiert
          und gefährliche Freizeitaktivitäten betätigt.
        </p>


      
      </div>
    </div>
  );
}

export default About;
