import react, {useState} from "react"
import { hotelsData } from "../statics/data";
import Appcontext from "./Appcontext";

const Statecontext = ({children})=>{

const [data, setData] = useState(hotelsData)

return(

<Appcontext.Provider value={{data,setData}}>

{children}

</Appcontext.Provider>
)


}

export default Statecontext;
