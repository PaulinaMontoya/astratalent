import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testone extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible:false,
      }
    }

  AlertStartTest=()=> {
    alert("You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?")
    this.setState({
      visible:true,
    })
   }

  render() {
    console.log(this.state.visible)
    return (
      <div className="cointenerContact">
        <Header/>
          <p>Test de Lógica</p>
          <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
          <Timer visible={this.state.visible} />
          <Link to="testtwo">
          <button >START TEST 2</button>
          </Link>
      <Footer/>
      </div>
    );
  }
}

export default Testone;