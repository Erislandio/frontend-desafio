import React, { Component } from "react";
import "./dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      breedsList: []
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

      this.setState({ breedsList, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div id="dashboard">
        <div>teste</div>
      </div>
    );
  }
}
