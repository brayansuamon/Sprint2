import react from "react";
import styles from "./Card.module.css";

function Card({ hotel }) {
  return (
    <div className={styles.card}>
      <h3>{hotel.name}</h3>
      <h5>{hotel.country}</h5>
      <img
        width="100%"
        src={hotel.photo}
        alt={`fotografía del hotel ${hotel.name}`} /*Sirve como label cuando no muestre la IMG */
      />
    </div>
  );
}
export default Card;
