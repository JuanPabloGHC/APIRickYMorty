import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Personajes from './componentes/Personajes';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  
  const url = "https://rickandmortyapi.com/api/character/";
  
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("");


  const [query, setQuery] = useState(url + "?page=" + contador.toString());

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

  const onChange = (e) => {
    setNombre(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(url + "?name=" + nombre);
  };

  useEffect(() => {
    setQuery(url + "?page=" + contador.toString());
  }, [contador]);


  useEffect(() => {
    
  }, [query]);

  return(
    <>
    <div>
      <h1 className='text-info py-4'>RICK Y MORTY</h1>
      <form action="" onSubmit={onSubmit}>
        <div>
          <input
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              onChange={onChange}>
          </input>
          <button>Buscar</button>
        </div>
      </form>
      

      {contador > 1 ? (
        <button
          onClick={cambioPagina2}
          disabled = {contador === 1}
          id="btn__prev"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          
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
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          
        >
          Next
        </button>
      ):(
        <></>
      )}

      <Personajes url={query}/>
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