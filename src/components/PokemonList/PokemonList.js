import React, { useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'

function PokemonList(props){

    if(props.pokemons[0]){
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pokemons.map(pokemon => 
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    )}
                </tbody>
            </table>
        );
    } else {
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            )
    }
}

export default PokemonList;