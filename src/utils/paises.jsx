import React,{ useContext } from "react";
import Appcontext from "../context/Appcontext"


 const filtrarPaises = ({evento}) => {


  const {data,setData} = useContext(Appcontext);
  
  
    // switch (evento.target.value) {
    //   case "argentina":
    //     setData( data.filter((hotel) => {
    //       if (hotel.country === "Argentina") {
    //         return hotel;
    //       }
    //     }));
    //     break;
    //   case "brasil":
    //     setData ( data.filter((hotel) => {
    //       if (hotel.country === "Brasil") {
    //         return hotel;
    //       } 
    //     }));
    //     break;
    //   case "chile":
    //     setData ( data.filter((hotel) => {
    //       if (hotel.country === "Chile") {
    //         return hotel;
    //       } 
    //     }));
    //     break;
    //   case "uruguay":
    //     setData ( data.filter((hotel) => {
    //       if (hotel.country === "Uruguay") {
    //         return hotel;
    //       } 
    //     }));

    //     break;
    //   default:
    //     return data;
    // }
    

  }
export default filtrarPaises;