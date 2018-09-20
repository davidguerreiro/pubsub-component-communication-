import React, { Component } from 'react';
import Form from './components/Form';
import PubSub from 'pubsub-js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // create global event - will be lisened by FormImput children component
    PubSub.publish('GLOBAL_EVENT', true);
  }
  render() {
    return (
      <div className="App">
        <h4>Component 1</h4>
        <button onClick={this.onClick}>Tigger event</button>
        <Form/>
      </div>
    );
  }
}

export default App;
