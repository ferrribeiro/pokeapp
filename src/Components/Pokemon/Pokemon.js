import React, { Component } from "react";
import axios from "axios";
import "./Pokemon.css";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      capturar: false,
    };
  }

  componentDidMount() {
    let url = this.props.url;
    console.log(url);
    axios.get(url).then(response => {
      console.log("PokeAPI response: ", response);
      this.setState({ imageSource: response.data.sprites.front_shiny });
    });
  }
  
  // capturar pokemon
  capturar() {
    this.setState({ capturar: true });
  }

  // soltar pokemon
  soltar() {
    this.setState({ capturar: false });
  }

  render() {
    const { name } = this.props;
    const { capturar, imageSource } = this.state;
    return (
      <div className="pokemon">
        <h3 className="name">{name}</h3>
        <img alt="Foto Shiny do Pokemon" src={imageSource}></img>
        <div className="controls">
          {capturar ? (
            <button onClick={(e) => this.soltar()}>Soltar</button>):
            (<button onClick={(e) => this.capturar()}>Capturar!</button>
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
