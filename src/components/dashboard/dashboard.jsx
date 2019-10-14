import React, { Component } from "react";
import "./dashboard.css";
import axios from "axios";
import { Loading } from "../loading/loading";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      breedsList: [],
      dog: "",
      font: ""
    };
  }

  async componentDidMount() {
    try {
      const {
        data: { message }
      } = await axios.get(`https://dog.ceo/api/breeds/list/all`);

      let breedsList = [];

      Object.keys(message).forEach(function(key) {
        breedsList.push(key);
      });

      const {
        data: { message: dog }
      } = await axios.get(
        `https://dog.ceo/api/breed/${breedsList[0]}/images/random`
      );

      this.setState({ breedsList, loading: false, dog });
    } catch (error) {
      console.log(error);
    }
  }

  handleChangeDog = name => {};

  render() {
    const { loading, breedsList, dog: imageDog } = this.state;
    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="dash">
          <img src={imageDog} id="imageDog" />
          <div className="select-box">
            <h3> Selecione a Raça</h3>
            <select>
              {breedsList.map((dog, index) => {
                return <option key="">{dog}</option>;
              })}
            </select>
            <h3> Nome do doguinho :-)</h3>
            <input type="text" placeholder="Nome" />
            <h3> Tipo da fonte!</h3>
            <select>
              {breedsList.map((dog, index) => {
                return <option key="">{dog}</option>;
              })}
            </select>
            <button>Salvar!</button>
          </div>
        </div>
      );
    }
  }
}
