import React, {Component} from 'react';

class Gif extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gif: ""
        }
      
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch ( error => console.log(error))
    }

    traerGifNuevo() {
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=oa2OSCFV6wfJlTdInRlP6S4HeQ89mWa8&tag=&rating=g', this.mostrarGif)
    }
    
    componentDidMount() {
        console.log('Me monte!!');
        this.traerGifNuevo();
    }


    mostrarGif = (data) => {
        this.setState(
            {
                gif: data.data.image_url
            }
        )
    }

    componentDidUpdate() {
        console.log('Me actualice!!');
        alert('Tengo un gif nuevo!');
    }

    render() {
        console.log('Estoy renderizando')

        let contenido;
        if (this.state.gif == ""){
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src = {this.state.gif}></img>
        }
        return(
            <div>
                {contenido}
                <button onClick = { () => this.traerGifNuevo() }>Random Gif!</button>
            </div>
            
        );
    }
}
export default Gif; 