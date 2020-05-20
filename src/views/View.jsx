import React, { Component } from "react";
import axios from "axios";

import Header from "../components/Header";
import User from "../components/User";

export default class View extends Component {
  state = {
    input: "",
    user: {},
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleClick = async () => {
    const { input } = this.state;

    let user = null;

    try {
      user = await axios.get(`https://api.github.com/users/${input}`);

      this.setState({ user: user.data });
    } catch (error) {
      this.setState({ user: {} });
    }
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Header
          handleClick={this.handleClick}
          handleInputChange={this.handleInputChange}
        />
        <User user={user} />
      </>
    );
  }
}
