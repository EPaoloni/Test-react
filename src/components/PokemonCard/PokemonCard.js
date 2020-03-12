import React from 'react';

class PokemonCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {pokemon:{}}
    }

    updatePokemonData(){
        if(!this.state.pokemon.name){
            fetch(this.props.pokemon.url)
                .then(res => res.json())
                .then((data) => {
                    this.setState({pokemon:{
                                        id: data.id,
                                        name: data.name,
                                        sprite: data.sprites.front_default,
                                        type: data.types[0].type.name
                                        }
                                    })
                    });
        }
    }

    render(){
        if(!this.props.pokemon){
            return <tr/>
        } else{
            this.updatePokemonData();

            return(
                <tr>
                    <td>
                        <h4>{this.state.pokemon.id}</h4>
                    </td>
                    <td>
                        <h4>{this.state.pokemon.name}</h4>
                    </td>
                    <td>
                        <h4>{this.state.pokemon.type}</h4>
                    </td>
                    <td>
                        <img alt={this.state.pokemon.name + '-sprite'} src={this.state.pokemon.sprite}></img>
                    </td>
                </tr>  
            );
        }
    }
}

export default PokemonCard;