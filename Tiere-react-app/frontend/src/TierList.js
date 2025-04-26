import React, { useEffect, useState } from "react";
import TierCard from "./TierCard";


function TierList() {
  const [tiere, setTiere] = useState([]);

  useEffect(() => {
    const urlListe = [];
    async function getTiere() {
      const res = await fetch(
        "http://127.0.0.1:5005/tiere"
      );
      const data = await res.json();
      setTiere(data)
    }

    getTiere()
    


  }, []);

  return (
    <>
      <div className="containerList">
        {tiere.map((tier) => (
          <TierCard
            id={tier.id}
            Name={tier.name}
            Tierart={tier.tierart}
            Krankheit={tier.krankheit}
            Geburtstag={tier.geburtstag}
            Gewicht={tier.gewicht}
          ></TierCard>
        ))}
      </div>
    </>
  );
}

export default TierList;