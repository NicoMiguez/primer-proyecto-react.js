import React, { Component } from 'react';
import Pelicula from './Pelicula';

class TiraPeliculas extends Component {
  
  lanzarAlerta() {
    alert('Me clickeaste!!');
  }

  cambiarAmarillo() {
    document.querySelector('body').style.backgroundColor = 'Yellow'
  }

  cambiarRosa() {
    document.querySelector('body').style.backgroundColor = 'Pink'
  }
  
  
  
  render() {
    return (
      <div onClick = {this.lanzarAlerta} onMouseOver = {this.cambiarAmarillo} onMouseOut = {this.cambiarRosa}>
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