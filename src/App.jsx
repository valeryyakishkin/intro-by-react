import { Component } from 'react';
import './App.css';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.setState((state) => {
      return {
        ...state,
        count: ++state.count
      }
    })
  }

  decreaseCount() {
    this.setState((state) => {
      return {
        ...state,
        count: --state.count
      }
    })
  }
  
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.increaseCount()}>Plus</button>
        <span>{count}</span>
        <button onClick={() => this.decreaseCount()}>Minus</button>
      </div>
    )
  }
}
