import React from 'react';


import TiraPeliculas from './components/TiraPeliculas';
import ContenedorPublicidad from './components/ContenedorPublicidad';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <main>
        <ContenedorPublicidad>
          <h2>Wooow! Publicidad!</h2>
        </ContenedorPublicidad>
        
        <TiraPeliculas />

        

        <ContenedorPublicidad>
          <ul>
            <li>Public 1</li>
            <li>Public 2</li>
            <li>Public 3</li>
          </ul>
        </ContenedorPublicidad>

        <Contador inicial={0} />
      </main>
    </div>
  );
}

export default App;
