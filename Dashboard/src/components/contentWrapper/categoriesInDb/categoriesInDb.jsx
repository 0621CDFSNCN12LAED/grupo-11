import React, { Component } from "react";

const GENRES_URL = "http://localhost:3001/api/genres";
// const GENRES_URL = "/api/genres";

export default class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // genres: []
    };

    console.log("Evento: Constructor");
  }

  render() {
    if (!this.state.genres) {
      return <div class="row">CARGANDO!!!</div>;
    }

    return (
      <div class="row">
        {this.state.genres.map((genre) => {
          return (
            <div class="col-lg-6 mb-4">
              <div class="card bg-dark text-white shadow">
                <div class="card-body">{genre.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log("Evento: componentDidMount");
    this.fetchGenres();
  }

  async fetchGenres() {
    //Fetch de los generos
    const result = await fetch(GENRES_URL);
    const response = await result.json();
    const genres = response.data;

    //Setear como un estado
    this.setState({ genres: genres });
  }
}
