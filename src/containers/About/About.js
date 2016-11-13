import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  render() {
    const { showKitten } = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About Us" />

        <p>This project was originally created by Rizki Andrianto
          (<a href="github.com/rizkiandrianto/" target="_blank">rizkiandrianto</a>). <br />
        Created with Yeoman Generator from <a href="https://github.com/bertho-zero/react-redux-universal-hot-example/" target="_blank">this repo</a>
        </p>
      </div>
    );
  }
}
