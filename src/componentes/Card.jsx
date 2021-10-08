import React from "react";


function Card ({drake}){
    return(
    <div class="card">
        <h2 class="name">{drake.Nombre}</h2>
        <img class="pic" src="./images/dragon.svg" alt=""/>
        <div class="info">
          <p class="type w-100"><span>Tipo:</span> {drake.Tipo}</p>
          <p class="w-100"><span>Description:</span> {drake.Descripcion}</p>
          <div class="container-attacks">
            <h4 class="w-100">Ataques</h4>
            {
              drake.Ataque.map((ataque)=>{
                return <p class="type w-49"><span>{ataque.Nombre}:</span> {ataque.Daño}</p>
              })
            }
          </div>
          <p class="type w-49"><span>Defensa:</span> {drake.Defensa}</p>
          <p class="type w-49"><span>Vida:</span> {drake.Vida}</p>
        </div>
    </div>
    );
}

export default  Card