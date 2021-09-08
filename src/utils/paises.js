import { useContext } from "react";
import {Appcontext} from "../context/Appcontext"


 const filtrarPaises = (evento,hotelsData) => {


  const {data} = useContext(Appcontext);
  
  console.log(evento.target.value);
    let hotelesFiltrados = hotelsData;

    switch (evento.target.value) {
      case "argentina":

        hotelesFiltrados = hotelsData.filter((hotel) => {
          if (hotel.country === "Argentina") {
            return true;
          } else {
            return false;
          }
        });
        break;
      case "brasil":
        hotelesFiltrados = hotelsData.filter((hotel) => {
          if (hotel.country === "Brasil") {
            return true;
          } else {
            return false;
          }
        });
        break;
      case "chile":
        hotelesFiltrados = hotelsData.filter((hotel) => {
          if (hotel.country === "Chile") {
            return true;
          } else {
            return false;
          }
        });
        break;
      case "uruguay":
        hotelesFiltrados = hotelsData.filter((hotel) => {
          if (hotel.country === "Uruguay") {
            return true;
          } else {
            return false;
          }
        });

        break;
      default:
        hotelesFiltrados = hotelsData;
        break;
    }
    return hotelesFiltrados;
  }
export default filtrarPaises;