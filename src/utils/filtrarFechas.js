const filtrarFechas = (e) =>{

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



}
export default filtrarFechas;