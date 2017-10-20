import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: true,
      bigHeight: 0,
      smallHeight: 0,
      oreos: 0};
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.calc = this.calc.bind(this);
  }

  handleEdit(event) {
    var el = document.createElement('canvas');

    this.setState({
      [event.target.id]: event.target.value < 1000 ? event.target.value:999
    });
  }

  handleToggle() {
    this.setState({
      units: !this.state.units
    });
  }

  calc() {
    if (!this.state.units) {
      var oreoHeight = .8;
      var userHeight = (this.state.bigHeight * 100) + Number(this.state.smallHeight);
      var oreoCount = Math.floor(userHeight / oreoHeight);
    } else {
      var oreoHeight = 0.314961;
      var userHeight = (this.state.bigHeight * 12) + Number(this.state.smallHeight);
      var oreoCount = Math.floor(userHeight / oreoHeight);
    }
    return oreoCount;
  }

  render() {
    return (
      <div className="App container vertical">
        <div className="container vertical" id="interaction-zone">
          <div className="container vertical" id="header">
            <h1>Your Height in Oreo</h1>
          </div>


          <div className="container horizon" id="unit-toggler" onClick={this.handleToggle}>
            <div className="container toggle-option" id="toggleImperial"
              style={{backgroundColor: this.state.units ? '#29180a':'white',
                      fontWeight: this.state.units ? 'bold':'normal',
                      color: this.state.units ? 'white':'#29180a'}}>Imperial
            </div>
            <div className="container toggle-option" id="toggleMetric"
                style={{backgroundColor: !this.state.units ? '#29180a':'white',
                        fontWeight: !this.state.units ? 'bold':'normal',
                        color: !this.state.units ? 'white':'#29180a'}}>Metric
            </div>
          </div>


          <form className="container horizon">
            <input type="number" id="bigHeight"
              placeholder="0"
              max="3"
              value={this.state.bigHeight ? this.state.bigHeight:''}
              onChange={this.handleEdit} />
            <input type="number" id="smallHeight"
              placeholder="0"
              max="999"
              value={this.state.smallHeight ? this.state.smallHeight:''}
              onChange={this.handleEdit} />
          </form>
          <div className="container unit-ids">
            <span>{this.state.units ? "ft":"m"}</span>
            <span>{this.state.units ? "in":"cm"}</span>
          </div>
        </div>

        <div className="container vertical flex-end response">
          <p id="output">{this.calc()}</p>
          <img className="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/8/8f/Oreo.svg/revision/latest?cb=20150727230728" />
        </div>
    </div>
    );
  }
}

export default App;
