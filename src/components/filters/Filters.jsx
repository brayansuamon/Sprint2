import react, { useState,useContext } from "react";
//Importamos el context que creamos
import Appcontext from "../../context/Appcontext";

import styles from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//import { hotelsData } from "../../statics/data";
import Cards from "../cards/Cards";

//Importamos la funcion de paises utils
import filtrarPaises from "../../utils/paises"
import filtrarTamanos from "../../utils/filtrarTamanos";
import filtrarFechas from "../../utils/filtrarFechas";
import filtrarOfertas from "../../utils/filtrarOfertas"


function Filters() {

const {data,setData} = useContext(Appcontext);


  const limpiar = (limpia) => {
  //   console.log("Limpiar Consola");
  //  // hotelesFiltrados = hotelsData;
  //   return data;
  // }
  console.log(data);
  }
 
 
  
  return (
    <form className={styles.contenedor}>
      {/* <input value={desde} onChange={cambioFechaDesde} type="date" />
      <input value={hasta} onChange={cambioFechaHasta} type="date" /> */}
      {/* <input value={desde} onChange={(e)=>filtrarFechas(e,a)} type="date" />
      <input value={hasta} onChange={(a)=>filtrarFechas(e,a)} type="date" /> */}

      <select id="" onChange={(e)=>filtrarPaises(e)}>
        <option value="todos">Todos</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
      </select>

      <select id="" onChange={(e)=>filtrarOfertas(e)}>
        <option value="$">Oferta</option>
        <option value="$$">Económico</option>
        <option value="$$$">Moderado</option>
        <option value="$$$$">Lujoso</option>
      </select>

      <select id="" onChange={(e)=>filtrarTamanos(e)}>
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
