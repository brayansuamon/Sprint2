import react,{useContext} from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";
import Appcontext from "../../context/Appcontext"




function Cards() {

  const {data} = useContext(Appcontext);

  return (
    <main className={styles.cards}>
      {data.map((hotel) => {
        return <Card className={styles.card} key={hotel.slug} hotel={hotel} />;
      })}
    </main>
  );
}

export default Cards;
