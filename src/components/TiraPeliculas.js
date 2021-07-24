import React, { Component } from 'react';
import Pelicula from './Pelicula';

class TiraPeliculas extends Component {
  render() {
    return (
      <div>
        <Pelicula generos={['Fantasia', 'Ciencia Ficcion']} titulo='Harry Potter' />
        <Pelicula rating={9.0} titulo='Inception' />
        <Pelicula generos={['Animada', 'Familiar']} rating={7.5} titulo='Toy Story' />
        <Pelicula generos={['Ciancia Ficcion', 'Futurista']} rating={6.7} titulo='Star Wars' />
        <Pelicula generos={['Accion', 'Western']} rating={8.9} titulo='Kill Bill' />
      </div>
    );
  }
}


export default TiraPeliculas;