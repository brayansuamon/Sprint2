import react, { useState,useContext } from "react";
//Importamos el context que creamos
import Appcontext from "../../context/Appcontext";

import styles from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { hotelsData } from "../../statics/data";
import Cards from "../cards/Cards";
//Importamos la funcion de paises utils
import filtrarPaises from "../../utils/paises"


export function Filters() {

const {data} = useContext(Appcontext);
console.log(data);


  const limpiar = (limpia) => {
    console.log("Limpiar Consola");
   // hotelesFiltrados = hotelsData;
    return data;
  };
 
const ofertas = (oferta) => {
    console.log(oferta.target.value);
    switch (oferta.target.value) {
      case "$":
        break;
      case "$$":
        break;
      case "$$":
        break;
      case "$$":
        break;

      default:
        break;
    }
  };

  const tamanos = (tamano) => {
    console.log(tamano.target.value);
  };

  //Mencionar el cambio de Fecha
  const [desde, setDesde] = useState("");
  const [hasta, SetHasta] = useState("");

  //Capturar su valor en una variable
  let cambioFechaDesde = (e) => {
    setDesde(e.target.value);
  };
  let cambioFechaHasta = (e) => {
    SetHasta(e.target.value);
  };

  //Pasar las nuevas variables a String
  let DS_desde = new Date(desde + "T00:00:00");
  let DS_hasta = new Date(hasta + "T00:00:00");

  // Vamos a crear el objeto options
  let opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  //Vamos a crear el toLocaleDateString para mostrar las fechas seleccionadas
  let desdeNatural = DS_desde.toLocaleDateString("es-CO", opciones);
  let hastaNatural = DS_hasta.toLocaleDateString("en-CO", opciones);

  //Pasarlo a unidades UNIX
  let desdeUNIX = DS_desde.getTime();
  let hastaUNIX = DS_hasta.getTime();

  //Vamos a Crear un for para mostrar la disponibilidad
  //let hotelesFiltrados = data;
  if (desde !== "" && hasta !== "") {
     data.filter((hotel) => {
      if (
        hotel.availabilityFrom <= desdeUNIX &&
        hotel.availabilityTo >= hastaUNIX
      ) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    console.log("Debe ingresar las dos fechas");
  }

  
  return (
    <form className={styles.contenedor}>
      <input value={desde} onChange={cambioFechaDesde} type="date" />
      <input value={hasta} onChange={cambioFechaHasta} type="date" />

      <select id="" onChange={(e)=>filtrarPaises(e,hotelsData)}>
        <option value="todos">Todos</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
      </select>

      <select id="" onChange={ofertas}>
        <option value="$">Oferta</option>
        <option value="$$">Económico</option>
        <option value="$$$">Moderado</option>
        <option value="$$$$">Lujoso</option>
      </select>

      <select id="" onChange={tamanos}>
        <option value="pequeño">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>

      <button type="reset" onClick={limpiar} className={styles.button}>
        <FontAwesomeIcon icon={faTrash} />
        Limpiar
      </button>
    </form>
  );
}

export default Filters;
