import react from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1>Hoteles</h1>
      <br />
      <div className={styles.texto}>
        <h2>En cualquier fecha.</h2>
        <h2>En cualquier país.</h2>
        <h2>De cualquier precio.</h2>
        <h2>De cualquier tamaño.</h2>
      </div>
    </div>
  );
}

export default Header;
