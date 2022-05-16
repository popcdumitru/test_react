import "./index.css";
import Produs from "./Produs";

function Ex1(props) {
  return (
      //added a border for the div in order to identify the components easier
    <header>
    
      <div class="border">
        <Produs
          denumire="cherestea"
          pret={12.59}
          categorie="lemne"
          backgroundColor="#FADBD8"
        />
        <br />
        <Produs
          denumire="imprimanta"
          pret={99.59}
          categorie="multifunctionale"
          backgroundColor="#F8C471"
        />
        <br />
        <Produs
          denumire="mouse"
          pret={11.59}
          //conditional rendering
          categorie = {(!props.categorie) ? 'categorie_inexistenta' : 'test'}
          backgroundColor='#3498DB' 
        />
      </div>
      <div></div>
      <br />
    </header>
  );
}

export default Ex1;
