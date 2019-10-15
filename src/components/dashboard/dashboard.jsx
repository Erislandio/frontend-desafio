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
      font: "Mansalva",
      name: "",
      imageLoading: false,
      color: "#fff"
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

  handleChangeBreeds = async breeds => {
    try {
      const {
        data: { message }
      } = await axios.get(`https://dog.ceo/api/breed/${breeds}/images/random`);

      this.setState({ dog: message });
    } catch (error) {}
  };

  render() {
    const {
      loading,
      breedsList,
      dog: imageDog,
      name,
      font,
      color
    } = this.state;

    const fonts = [
      {
        fontFamily: "Mansalva"
      },
      {
        fontFamily: "Zhi Mang Xing"
      },
      {
        fontFamily: "Ubuntu"
      },
      {
        fontFamily: "Roboto"
      },
      {
        fontFamily: "Indie Flower"
      }
    ];

    const colors = [
      {
        name: "Preto",
        color: "#2c3e50"
      },
      {
        name: "Azul",
        color: "#3498db"
      },
      {
        name: "Turquesa",
        color: "#1abc9c"
      },
      {
        name: "Verde",
        color: "#2ecc71"
      },
      {
        name: "Roxo",
        color: "#9b59b6"
      }
    ];

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="dash">
          <div className="imageContainer">
            <h4 style={{ fontFamily: font, color }}>{name}</h4>
            <img src={imageDog} id="imageDog" />
          </div>
          <div className="select-box">
            <h3> Selecione a Raça</h3>
            <select onChange={e => this.handleChangeBreeds(e.target.value)}>
              {breedsList.map((dog, index) => {
                return <option key={index}>{dog}</option>;
              })}
            </select>
            <h3> Nome do doguinho :-)</h3>
            <input
              type="text"
              placeholder="Nome"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
            <h3> Tipo da fonte!</h3>
            <select
              onChange={e => {
                this.setState({ font: e.target.value });
              }}
            >
              {fonts.map(({ fontFamily }, index) => {
                return <option key={index}>{fontFamily}</option>;
              })}
            </select>
            <h3> Cor da Fonte</h3>
            <select
              onChange={e => {
                this.setState({ color: e.target.value });
              }}
            >
              {colors.map(({ name, color: colorName }, index) => {
                return (
                  <option key={index} value={colorName}>
                    {name}
                  </option>
                );
              })}
            </select>
            <button>Salvar!</button>
          </div>
        </div>
      );
    }
  }
}
