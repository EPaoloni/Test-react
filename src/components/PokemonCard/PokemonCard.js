import React, { useState } from 'react';

function PokemonCard(props){

    const [pokemon, setPokemon] = useState({});

    function updatePokemonData(){
        if(!pokemon.name){
            fetch(props.pokemon.url)
                .then(res => res.json())
                .then((data) => {
                    setPokemon(data)
                    });
        }
    }

    if(!pokemon.name){
        if(props.pokemon){
            updatePokemonData();
        }
        return <tr/>
    } else{

        return(
            <tr>
                <td>
                    <h4>{pokemon.id}</h4>
                </td>
                <td>
                    <h4>{pokemon.name}</h4>
                </td>
                <td>
                    <h4>{pokemon.types[0].type.name}</h4>
                </td>
                <td>
                    <img alt={pokemon.name + '-sprite'} src={pokemon.sprites.front_default}></img>
                </td>
            </tr>  
        );
    }
}

export default PokemonCard;