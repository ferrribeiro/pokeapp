import React, { Component } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokedex.css";


class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      pokemon: []
    };
  }

  handleSearch(val) {
    this.setState({ searchInput: val });
  }
  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => {
      console.log("PokeAPI response: ", response);
      this.setState({ pokemon: response.data.results });
    });
  }
  
  render() {

    const { pokemon, searchInput } = this.state;

    const pokeList = pokemon
      .filter(p => p.name.includes(searchInput))
      .map(p => {

        return <Pokemon url={p.url} name={p.name} />;
      });
    return (
      <div className="pokedex">
        <input
          className="search"
          type="text"
          placeholder="Pesquise um Pokemon"
          onChange={e => this.handleSearch(e.target.value)}
        />
        <div className="list">{pokeList}</div>
      </div>
    );
  }
}

export default Pokedex;