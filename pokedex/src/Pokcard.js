import React, { Component } from 'react';
import './Pokcard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;

    return (
        <div className="PokCard">
        <div className='PokCard-title'>{ this.props.name }</div>
        <img className='PokCard-img' src={imgSrc} /> 
        <div className='PokCard-data'>Type: {this.props.type}</div>
        <div className='PokCard-data'>Exp: {this.props.exp}</div>
        </div>
        );
     }
  }