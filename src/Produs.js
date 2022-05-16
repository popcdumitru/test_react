import "./index.css";
import React from "react";

function Produs(props) {
  
  const categorie = props.categorie;
  const pret = props.pret;
  const denumire = props.denumire;
  const backgroundColor = props.backgroundColor;


  return (
    <header>
      <div style={{backgroundColor: props.backgroundColor}} >
       <p >Produsul se numete {denumire}, este în categoria {categorie}, are prețul de {pret} lei</p>
      </div>
      <br />
    </header>
  );
}

export default Produs;
