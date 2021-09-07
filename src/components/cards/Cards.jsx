import react from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";

function Cards({ hotelsData }) {
  return (
    <main className={styles.cards}>
      {hotelsData.map((hotel) => {
        return <Card className={styles.card} key={hotel.slug} hotel={hotel} />;
      })}
    </main>
  );
}

export default Cards;
