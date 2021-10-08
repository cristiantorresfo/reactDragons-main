import React from "react"
import Card from "./Card";

function Cards ({dataDragons}){
    return(
        <div className="container">
            {dataDragons.map((drake)=>{
                return <Card key={drake.Nombre} drake={drake}/>

                
            })}
        </div>

    );
}
export default Cards

