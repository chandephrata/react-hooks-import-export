import React from "react";
import aDifferentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";


function ColoradoStateParks() {
  aDifferentName(); // => "42 parks!"
  console.log(trees);
  wildlife();
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  
  return(
    <div>
      <MesaVerde/>
      <h1>Colorado State Parks!</h1>;
    </div>
   
  );
}

export default ColoradoStateParks;