import React, { useState, useEffect } from 'react';

function PokemonCard(props){

    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        updatePokemonData();
    }, [props.pokemon]);

    function updatePokemonData(){
        setIsLoading(true);
        fetch(props.pokemon.url)
            .then(res => res.json())
            .then((data) => {
                setPokemon(data)
                setIsLoading(false)
                });
    }

    if(!pokemon.name){
        return <tr/>  
    } else if(isLoading){
        return(
            <tr>
                <td>
                    <h4></h4>
                </td>
                <td>
                    <h4></h4>
                </td>
                <td>
                    <h4></h4>
                </td>
                <td>
                </td>
            </tr>  
        );
    } else {

        if(props.pokemon.name !== pokemon.name){
            updatePokemonData();
        }

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