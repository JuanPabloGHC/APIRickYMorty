import React from "react";

const Personaje = ({personaje}) => {
    return ( 
        <div className="col-md-4 pb-4">
            
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <img src={personaje.image} alt={personaje.name} className="card-img-top"/>

                <div className="card-body">
                    <h1 className="card-title">{personaje.name}</h1>
                    <p className="card-text">{personaje.status} -- {personaje.species}</p>
                </div>
            
            </div> 

        </div>
     );
}
 
export default Personaje;