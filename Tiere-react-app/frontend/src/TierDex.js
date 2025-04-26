import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./TierDex.css";


function TierDex() {
  const { id } = useParams();
  const [tiere, setTiere] = useState();

  useEffect(() => {
    async function getTierDetails() {
      const res = await fetch(`http://127.0.0.1:5005/tiere/${id}`);
      const data = await res.json();
      setTiere(data);
    }
    
    getTierDetails();

  }, []);

  if (!tiere){
    return <p></p>
  }
  return (
    <div>
      <h1>Name: {tiere.name}</h1>
      <h2>Tierart: {tiere.tierart}</h2>
      <h2>Gesundheitszustand: {tiere.krankheit}</h2>
      <h2>Geburtstag: {tiere.geburtstag}</h2>
      <h2>Gewicht: {tiere.gewicht}</h2>
    </div>
  );
}

export default TierDex;