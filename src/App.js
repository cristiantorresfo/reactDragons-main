
import Cards from "./componentes/Cards";
import Filter from "./componentes/Filter";
import { useState } from "react";
import DataDragons from "./statics/data"


function App() {
  const [valueInputFilter,setValueInputFilter]=useState("");
  function filtrarDragones (){
    const nuevaListaDragones = DataDragons.filter((dragon)=>{
      if(valueInputFilter===""){
        return dragon
      }
      return dragon.Nombre.toLowerCase().includes(valueInputFilter)
    })
    return nuevaListaDragones
  }
  const listaFiltrada = filtrarDragones()
  return (
    <div className="App">
      <Filter  valueInputFilter={valueInputFilter} setValueInputFilter={setValueInputFilter}/>
      <Cards dataDragons={listaFiltrada}/>
    </div>
  );
}

export default App;
