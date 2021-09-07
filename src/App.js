import "./styles.css";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import Filters from "./components/filters/Filters";
import { hotelsData } from "./statics/data";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Cards hotelsData={hotelsData} />
    </div>
  );
}
