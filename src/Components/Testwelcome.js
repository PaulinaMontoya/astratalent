import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Testwelcome extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Welcome</p>
          <p></p>
          <input type="checkbox">Notice of Privace</input>
          <Link to="testone">
          <button>START TEST 1</button>
          </Link>
      </div>
    );
  }
}

export default Testwelcome;