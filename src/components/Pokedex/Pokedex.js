import React, { useState, useEffect } from 'react';
import PokemonList from '../PokemonList/PokemonList'

function Pokedex(props){

    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState("");



    // UseEffect se ejecuta luego de algun evento, como DidMount, DidUpdate o WillUnmount
    // Le podemos pasar un segundo parametro con una lista de dependencias, que hacen que se vuelva a ejecutar si cambian esas dependencias
    useEffect(() => {
        fetchPokemons(url);
    }, [url]);

    function fetchPokemons(url){
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setPokemons(data.results)
                setNextUrl(data.next)
            })
    }

    function updateUrl(url){
        setUrl(url)
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={() => {updateUrl(nextUrl)}}>Next</button>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}

export default Pokedex;