import React from "react";
import Pokecard from "./Pokcard";
import "./Pokdex.css";

function Pokdex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokdex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokeex">
      <h2 className="Pokdex-title">Pokdex</h2>
      <div className="Pokdex-cards">
      {props.pokemon && props.pokemon.map(p => (
        <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
      <p>Learn React</p>
    </div>
  );
}

export default Pokdex;
