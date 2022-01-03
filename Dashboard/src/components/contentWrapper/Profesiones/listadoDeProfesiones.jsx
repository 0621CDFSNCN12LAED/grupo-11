import React, { Component } from "react";

//const categories = [
//  "Plomería",
//  "Albañilería",
//  "Pintura",
//  "Limpieza",
//  "Electricidad",
//  "Gas",
//  "Legales",
//  "Pisos",
//];

const PROFESIONES_URL = "http://localhost:3000/api/professionals";

export default class ListadoDeProfesiones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profesiones: [],
    };
  }

  render() {
    if (!this.state.profesiones) {
      return <div class="row">Cargando...</div>;
    }

    return (
      <div class="row">
        {this.state.profesiones.map((profesion) => {
          return (
            <div class="col-lg-6 mb-4">
              <div class="card bg-dark text-white shadow">
                <div class="card-body">{profesion.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.fetchProfesiones();
  }
  async fetchProfesiones() {
    const result = await fetch(PROFESIONES_URL);
    const response = await result.json();
    const profesiones = response.data;
    this.setState({ profesiones: profesiones });
  }
}
