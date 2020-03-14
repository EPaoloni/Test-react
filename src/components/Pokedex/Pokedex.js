import React from 'react';
import PokemonList from '../PokemonList/PokemonList'

class Pokedex extends React.Component{
    constructor(props){
        super(props);
        this.state = {pokemons: [],
                        next: ""};
    }

    componentDidMount(){
        this.fetchPokemons("https://pokeapi.co/api/v2/pokemon");
    }

    fetchPokemons(url){
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({next: data.next})
                this.setState({pokemons: this.state.pokemons.concat(data.results)})
            })
    }

    nextPokemons(){
        this.fetchPokemons(this.state.next);
    }

    render(){
        return(
            <div>
                <PokemonList pokemons={this.state.pokemons}/>
                <button className="btn btn-primary" onClick={() => {this.nextPokemons()}}>More</button>
            </div>
        );
    }
}

export default Pokedex;