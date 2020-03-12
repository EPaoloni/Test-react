import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard'

class PokemonList extends React.Component{
    constructor(props){
        super(props);
        this.state = {pokemonList: [{id:0}]}
    }

    render(){
        if(this.state.pokemonList[0] && this.props.pokemons[0]){
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
                        {this.props.pokemons.map(pokemon => 
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
}

export default PokemonList;