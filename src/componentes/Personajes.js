import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Personaje from './Personaje';

const Personajes = (props) => {

    const [personajes, setPersonajes] = useState([]);
    
    //const url = "https://rickandmortyapi.com/api/character/?page=1";

    useEffect(() => {
        axios.get(props.url).then((response) =>{
            setPersonajes(response.data.results);
        });
    }, [props.url]);
    
    return(
        <>
            <div className="container">
                <div className='row'>
                    {personajes.map((personaje) => <Personaje key={personajes.id} personaje={personaje}/>)}
                </div>
            </div>
        </>
    );
}


/*
    {personajes.map((element, index) => {
                    return <li key={index}>
                        <img src={element.image} alt=""/>
                        {element.name} -- {element.status}
                    </li>
                })}  
    <li>
        Morty
    </li>
*/ 
export default Personajes;