import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Personajes from './componentes/Personajes';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  
  const url = "https://rickandmortyapi.com/api/character/?page=";
  const [contador, setContador] = useState(1);

  function cambioPagina(){
    if(contador < 42){
      setContador(contador+1);
    }
  }

  function cambioPagina2(){
    if(contador > 1){
      setContador(contador-1);
    }
  }

  useEffect(() => {
    
  }, [contador]);

  return(
    <>
    <div>
      <h1 className='text-info py-4'>RICK Y MORTY</h1>

      {contador > 1 ? (
        <button
          onClick={cambioPagina2}
          disabled = {contador === 1}
          id="btn__prev"
          class="bg-yellow-200 hover:bg-yellow-500 text-brown-300 font-bold py-2 px-4 rounded-4"
          
        >
          Prev
        </button>
      ):(
        <></>
      )}
      {contador < 42 ? (
        <button
          onClick={cambioPagina}
          disabled = {contador === 42}
          id="btn__next"
          class="btn btn-primary"
          
        >
          Next
        </button>
      ):(
        <></>
      )}

      <Personajes url={url+contador.toString()}/>
    </div>
    </>
  );
}


/*
  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"

  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
*/
root.render(
    <App/>
);